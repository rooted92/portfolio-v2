import { NextResponse, NextRequest } from 'next/server';
import { Resend } from 'resend';
import mongoose from 'mongoose';
import ContactSubmissionEmail from '../../components/ContactSubmissionEmail';
import { connectToDatabase } from '@/app/lib/db';

connectToDatabase();

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}
if (!process.env.MONGODB_URI) {
  throw new Error('MONGO_URI is not defined in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

const mongoURI = process.env.MONGODB_URI;

const submissionSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    subject: String,
    message: String,
  },
  { timestamps: true }
);

const Submission =
  mongoose.models.Submission || mongoose.model('Submission', submissionSchema);

const verifyRecaptcha = async (token: string) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secret}&response=${token}`,
  });

  const data = await response.json();
  return data.success;
};

// Add CORS headers
function setCorsHeaders(response: NextResponse, origin: string) {
  response.headers.set('Access-Control-Allow-Origin', origin);
  response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
}

export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin') || '*';
  const response = NextResponse.json({}, { status: 204 });
  setCorsHeaders(response, origin);
  return response;
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');
  const allowedOrigins = ['http://localhost:3000', 'https://pedroc.dev'];

  if (origin && !allowedOrigins.includes(origin)) {
    return NextResponse.json({ error: 'CORS not allowed' }, { status: 403 });
  }

  const body = await request.json();
  const { firstname, lastname, email, subject, message, recaptchaToken } = body;

  if (!firstname || !lastname || !email || !subject || !message) {
    const response = NextResponse.json(
      { error: 'All fields are required.' },
      { status: 400 }
    );
    setCorsHeaders(response, origin || '*');
    return response;
  }

  if (!recaptchaToken) {
    const response = NextResponse.json(
      { error: 'Please complete the reCAPTCHA verification.' },
      { status: 400 }
    );
    setCorsHeaders(response, origin || '*');
    return response;
  }

  const isValidCaptcha = await verifyRecaptcha(recaptchaToken);
  if (!isValidCaptcha) {
    const response = NextResponse.json(
      { error: 'Invalid reCAPTCHA token.' },
      { status: 400 }
    );
    setCorsHeaders(response, origin || '*');
    return response;
  }

  try {
    if (!mongoose.connection.readyState) {
      await mongoose.connect(mongoURI);
    }

    const newSubmission = new Submission({ firstname, lastname, email, subject, message });
    await newSubmission.save();
  } catch (error) {
    console.error('Error saving submission:', error);
    const response = NextResponse.json(
      { error: 'Failed to save submission' },
      { status: 500 }
    );
    setCorsHeaders(response, origin || '*');
    return response;
  }

  try {
    await resend.emails.send({
      from: 'no-reply@email.adelmanauto.com',
      to: 'pedro@pedroc.dev',
      subject: `New Contact Form Submission: ${subject}`,
      replyTo: email,
      react: ContactSubmissionEmail({ firstname, lastname, email, subject, message }),
    });
  } catch (error) {
    console.error('Error sending email:', error);
    const response = NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
    setCorsHeaders(response, origin || '*');
    return response;
  }

  const response = NextResponse.json(
    { redirect: '/thanks' },
    { status: 200 }
  );
  setCorsHeaders(response, origin || '*');
  return response;
}