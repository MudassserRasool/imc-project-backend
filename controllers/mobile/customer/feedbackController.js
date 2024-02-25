import Feedback from '../../../models/common/coustomer/feedbackModel.js';

// post coustomer feedback
const postFeedback = async (req, res) => {
  const { name, feedback, rating } = req.body;

  try {
    const order = new Feedback({
      name,
      feedback,
      rating,
    });
    const savedFeedback = await order.save();
    res.status(201).json(savedFeedback);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export { postFeedback };
