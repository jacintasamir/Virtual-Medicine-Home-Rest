const bloodService = require('../services/bloodDonations');

module.exports.searchVolunteers = async(req, res) => {
    const bloodType = req.parmas.bloodType;
    try{
        const volunteer = await bloodService.searchVolunteers(bloodType);
        if(!volunteer){
            return res.status(404).send({
                error: 'No Volunteers.'
            });
        }
        return res.send({volunteer});
    }   catch (err) {
        res.status(500).send({
            error: err.message
        });
    }
};

module.exports.searchRecipient = async(req, res) => {
    const bloodType = req.parmas.bloodType;
    try{
        const recipient = await bloodService.searchRecipient(bloodType);
        if(!recipient){
            return res.status(404).send({
                error: 'No Recipients.'
            });
        }
        return res.send({recipient});
    }   catch (err) {
        res.status(500).send({
            error: err.message
        });
    }
};

module.exports.getVolunteer = async(req, res) => {
    try{
        const volunteers = await bloodService.findAllVolunteers();
        return res.send({volunteers});
    }   catch (err) {
        res.status(500).send({
            error: err.message
        });
    }
};

module.exports.getRecipient = async(req, res) => {
    try{
        const recipients = await bloodService.findAllRecipient();
        return res.send({recipients});
    }   catch (err) {
        res.status(500).send({
            error: err.message
        });
    }
};

module.exports.deleteVolutneer = async (req, res) => {
    const volunteerID = req.params.volunteerID;
    try {
      await bloodService.removeVolunteer(volunteerID);
      return res.send({
        msg: 'Volunteer deleted successfully.'
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
};

module.exports.deleteRecipient = async (req, res) => {
    const recipientID = req.params.recipientID;
    try {
      await bloodService.removeRecipient(recipientID);
      return res.send({
        msg: 'Recipient deleted successfully.'
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
};

module.exports.addVolunteer = async (req, res) => {
    const validationErrors = validationResult(req).array();
    if (validationErrors.length > 0) {
      const firstError = validationErrors[0];
      return res.status(422).send({
        error: firstError.msg
      });
    }

    const volunteerInfo = {
        name: req.body.name,
        age: req.body.age,
        phone: req.body.phone,
        email: req.body.email,
        ssn: req.body.ssn,
        diseases: req.body.diseases,
        location: {
            lat: req.body.lat,
            lon: req.body.lon
        },
        bloodType: req.body.bloodType
    }
    try {
      const addedVolunteer = await bloodService.addVolunteer(volunteerInfo);
      return res.status(201).send({
        msg: 'Volunteer added successfully.',
        volunteerId: addedVolunteer._id
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
};

module.exports.addRecipient = async (req, res) => {
    const validationErrors = validationResult(req).array();
    if (validationErrors.length > 0) {
      const firstError = validationErrors[0];
      return res.status(422).send({
        error: firstError.msg
      });
    }

    const recipientInfo = {
        name: req.body.name,
        age: req.body.age,
        phone: req.body.phone,
        ssn: req.body.ssn,
        location: {
            lat: req.body.lat,
            lon: req.body.lon
        },
        bloodType: req.body.bloodType
    }
    try {
      const addedRecipient = await bloodService.addRecipient(recipientInfo);
      return res.status(201).send({
        msg: 'Recipient added successfully.',
        recipientID: addedRecipient._id
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
};