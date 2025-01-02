'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: '',
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const validateForm = () => {
    const { firstname, lastname, email, subject, message } = formData;

    if (!firstname || !lastname || !email || !subject || !message) {
      setFormError('All fields are required.');
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setFormError('Please enter a valid email address.');
      return false;
    }

    if (!recaptchaToken) {
      setFormError('Please complete the reCAPTCHA verification.');
      return false;
    }

    setFormError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      if (response.ok) {
        router.push('/thanks');
      } else {
        const errorData = await response.json();
        setFormError(errorData.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section aria-label="Contact form" className="w-full">
      <form
        onSubmit={handleSubmit}
        className="my-8 flex flex-col justify-center items-center gap-8 w-64 xxs:w-80 sm:w-96 xl:w-[40rem] xxs:mx-2"
      >
        <fieldset className="flex flex-col xs:flex-row justify-between items-center gap-4 w-full">
          <legend className="sr-only">Full Name</legend>
          <input
            id="firstname"
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleInputChange}
            className="border-b border-b-persimmon placeholder:text-citrine focus:outline-persimmon rounded-t focus:rounded-t focus:border-none outline-none bg-honeydew dark:bg-licorice p-2 w-full"
            required
          />
          <input
            id="lastname"
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleInputChange}
            className="border-b border-b-persimmon placeholder:text-citrine focus:outline-persimmon rounded-t focus:rounded-t focus:border-none outline-none bg-honeydew dark:bg-licorice p-2 w-full"
            required
          />
        </fieldset>

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="border-b border-b-persimmon placeholder:text-citrine focus:outline-persimmon rounded-t focus:rounded-t focus:border-none outline-none bg-honeydew dark:bg-licorice p-2 w-full"
          required
        />
        <input
          id="subject"
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleInputChange}
          className="border-b border-b-persimmon placeholder:text-citrine focus:outline-persimmon rounded-t focus:rounded-t focus:border-none outline-none bg-honeydew dark:bg-licorice p-2 w-full"
          required
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
          className="border-b border-b-persimmon p-2 rounded-t placeholder:text-citrine focus:outline-persimmon focus:rounded-t focus:border-none outline-none bg-honeydew dark:bg-licorice w-full"
          rows={5}
          required
        />

        <ReCAPTCHA sitekey={siteKey!} onChange={handleRecaptchaChange} />

        {formError && <p className="text-red-500 text-sm mt-2">{formError}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-persimmon rounded w-full p-2 mt-2 font-semibold text-lg text-licorice dark:text-honeydew hover:opacity-85 transition-all ease-linear"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;