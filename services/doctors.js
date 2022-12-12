const { ObjectId } = require('mongoose').Types;

const DoctorModel = require('../models/Doctor');

module.exports.addNewDoctor = async (doctorDetails) => {
    try{
        const doctor = new DoctorModel({
            name: doctorDetails.name,
            specialization: doctorDetails.specialization,
            schedule: {
                workdays: doctorDetails.workdays,
                workhours: doctorDetails.workhours
            },
            location: {
                lat: doctorDetails.lat,
                lon: doctorDetails.lon
            }
        })
        const newDoctor = await doctor.save()
        return newDoctor
    } catch (err) {
        throw new Error('Could not add doctor.')
    }
}

module.exports.removeDoctor = async (doctorId) => {
    try {
        await DoctorModel.deleteOne({ _id: doctorId });
    } catch (err) {
        throw new Error('Could not delete doctor.');
    }
};

module.exports.searchDoctors = async (specialization) => {
    try {
        const doctor = await DoctorModel.find({specialization: specialization})
    } catch (err) {
        throw new Error('Could not find any doctors.')
    }
}

module.exports.findAllDoctors = async () => {
    try {
      const doctors = await ProductModel.find();
      return doctors;
    } catch (err) {
      throw new Error('Could not retrieve doctors.');
    }
  };

 module.exports.writeFeedback = async (feedback) => {
    try {
        const doctor = await DoctorModel.findById(doctorID)
        doctor.reviews.insert(feedback)
    } catch (err) {
        throw new Error('Could not insert review.')
    }
 }