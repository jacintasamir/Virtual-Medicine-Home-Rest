const doctorsService = require('../services/doctors');

module.exports.filterDoctors = async (req, res) => { 
    const specialization = req.params.specialization;
    try {
      const doctors = await doctorsService.searchDoctors(specialization);
      if (!doctors) {
        return res.status(404).send({
          error: 'No doctors.'
        });
      }
      return res.send({ doctors });
    } catch (err) {
      res.status(500).send({
        error: err.message
      });
    }
  };

  module.exports.getDoctors = async (req, res) => { 
    try {
      const doctors = await doctorsService.findAllDoctors();
      return res.send({ doctors });
    } catch (err) {
      // this denotes a server error, therefore status code should be 500.
      res.status(500);
      return res.send({
        error: err.message
      });
    }
  };
  
  module.exports.postDoctor = async (req, res) => {
    const validationErrors = validationResult(req).array();
    if (validationErrors.length > 0) {
      const firstError = validationErrors[0];
      return res.status(422).send({
        error: firstError.msg
      });
    }

    const doctorInfo = {
        name: req.body.name,
        specialization: req.body.specialization,
        schedule: {
            workdays: req.body.workdays,
            workhours: req.body.workhours
        },
        location: {
            lat: req.body.lat,
            lon: req.body.lon
        }
    }
    try {
      const addedDoctor = await doctorsService.addNewDoctor(doctorInfo);
      return res.status(201).send({
        msg: 'Doctor added successfully.',
        doctorId: addedDoctor._id
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
  };
  
  module.exports.deleteDoctor = async (req, res) => {
    const doctorId = req.params.doctorId;
    try {
      await doctorsService.removeDoctor(doctorId);
      return res.send({
        msg: 'Doctore deleted successfully.'
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
  };

  module.exports.giveFeedback = async (req, res) => { 
    const feedback = {
      doctorId: req.params.doctorId,
      rating: req.body.rating,
      name: req.body.name,
      comment: req.body.comment
    }
    try {
      const feedback = await doctorsService.writeFeedback(feedback);
      if (!doctors) {
        return res.status(404).send({
          error: 'No doctors.'
        });
      }
      return res.send({ doctors });
    } catch (err) {
      res.status(500).send({
        error: err.message
      });
    }
  };