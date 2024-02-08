import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  feedback: { type: String, required: true },
  rating: { type: Number, required: true, max: 5 },
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);
export default Feedback;
