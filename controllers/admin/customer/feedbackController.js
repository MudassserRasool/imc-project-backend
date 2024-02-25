import Feedback from '../../../models/common/coustomer/feedbackModel.js';

// get all feedbacks
const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//

export { getAllFeedbacks };
