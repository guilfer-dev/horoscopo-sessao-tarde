import mongoose from 'mongoose';

const SessaoSchema = new mongoose.Schema({
    year: Number,
    months: {
        type: Object,
        months: {
            type: Object,
            days: {
                type: Object,
                movie: String,
            }
        }
    }
});

export default mongoose.model('session', SessaoSchema);