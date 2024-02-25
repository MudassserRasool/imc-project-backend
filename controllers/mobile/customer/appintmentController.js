import Appointment from '../../../models/common/coustomer/appointmentModel.js';

// get all appointments
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

//

export { postAppointment };
