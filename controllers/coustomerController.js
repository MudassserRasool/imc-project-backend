import Feedback from '../models/coustomer/feedbackModel.js';
import Appointment from '../models/coustomer/orderModel.js';

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

// get all feedbacks
const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// book appointment order
const postAppointment = async (req, res) => {
  const { name, phone, doctor, disease, date, time } = req.body;

  try {
    const order = new Appointment({
      name,
      phone,
      doctor,
      disease,
      date,
      time,
    });
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// grt all appointments
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { getAllAppointments, getAllFeedbacks, postAppointment, postFeedback };
