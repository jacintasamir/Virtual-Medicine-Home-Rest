// sba7o
const patientService = require('../services/patients');

module.exports.uploadMedicalRecord = async (req, res) => { 
    const validationErrors = validationResult(req).array();
    if (validationErrors.length > 0) {
      const firstError = validationErrors[0];
      return res.status(422).send({
        error: firstError.msg
      });
    }

    const MedicalRecordinfo = {
        MedicalRecord: {
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            weight: req.body.weight,
            height: req.body.height,
            diseases: req.body.diseases,
        }
    }
    try {
        const addedM = await productsService.addNeweMedicalRecord(MedicalRecordinfo);
        return res.status(201).send({
          msg: 'Medical record added successfully.',
          patientId: addedM._id
        });
      } catch (err) {
        return res.status(500).send({
          error: err.message
        });
      }
};



module.exports.uploadPrescription = async (req, res) => { 
    const validationErrors = validationResult(req).array();
    if (validationErrors.length > 0) {
      const firstError = validationErrors[0];
      return res.status(422).send({
        error: firstError.msg
      });
    }

    const Prescriptioninfo = {
        eprescription: {
            DrName: req.body.DrName,
            Date: req.body.Date,
            PName: req.body.PName,
            details: req.body.details,
        }
    }
    try {
        const addedep = await productsService.addNewePrescription(Prescriptioninfo);
        return res.status(201).send({
          msg: 'ePrescription added successfully.',
          patientId: addedep._id
        });
      } catch (err) {
        return res.status(500).send({
          error: err.message
        });
      }
};