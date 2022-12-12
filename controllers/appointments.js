const appointmentService = require('../services/appointments');

module.exports.newappointments = async (req, res) => { 
    try{
      const newApps = await appointmentService.addAppointment();
      
      res.send({newApps});
      
      
    } catch (err) {
      res.status(500);
      res.send({
        error: err
      });
    }
  };

  module.exports.getappointments = async (req, res) => { 
    try{
      const retrievingappointments = await appointmentService.sendConfirmationMessage();
      
      res.send({retrievingappointments});
      
      
    } catch (err) {
      res.status(500);
      res.send({
        error: err
      });
    }
  };  

  module.exports.deleteapps = async (req, res) => {
    const appointmentDetailsId = req.params.appointmentDetailsId;
    try {
      await appointmentService.deleteAppointment(appointmentDetailsId);
      return res.send({
        msg: 'appointment has been removed.'
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
  };