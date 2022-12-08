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

module.exports.searchDoctors = async () => {
    try {

    } catch (err) {
        throw new Error('Could not find any doctors.')
    }
}