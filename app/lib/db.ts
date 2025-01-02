import mongoose from 'mongoose';

async function connectToDatabase() {

    const mongoURI = process.env.MONGODB_URI;
    
    if (!mongoURI) {
        throw new Error('MONGODB_URI is not defined');
    }

    if (!mongoose.connection.readyState) {
        try {
            await mongoose.connect(mongoURI);
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Failed to connect to MongoDB:', error);
            throw new Error('Failed to connect to the database');
        }
    }
}

export { connectToDatabase };