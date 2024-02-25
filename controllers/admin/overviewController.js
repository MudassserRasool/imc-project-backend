import Ambulance from '../../models/common/ambulanceModel.js';
import Appointment from '../../models/common/coustomer/appointmentModel.js';
import Doctor from '../../models/common/doctorModel.js';
import Customer from '../../models/mobile/customersModal.js';

const getOverview = async (req, res) => {
  try {
    const appointments = await Appointment.find({});
    const doctors = await Doctor.find({});
    const ambulances = await Ambulance.find({});
    const customer = await Customer.find({});
    res.status(200).json({
      appointments: appointments.length,
      doctors: doctors.length,
      ambulances: ambulances.length,
      customer: customer.length,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getOverview };
