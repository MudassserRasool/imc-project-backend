import Appointment from '../../../models/common/coustomer/appointmentModel.js';

// get all appointments
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//

export { getAllAppointments };
