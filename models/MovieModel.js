import mongoose from 'mongoose';

const SessaoSchema = new mongoose.Schema({
    date: Date,
    title: String
});

export default mongoose.model('session', SessaoSchema);