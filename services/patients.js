const { ObjectId } = require('mongoose').Types;

const PatientModel = require('../models/Patient');

module.exports.addNewPatient = async (patientDetails) =>{
    try{
        const patient = new PatientModel({
            name:patientDetails.name,
            ssn:PatientModel.ssn,
            age:PatientModel.age,
            gender:PatientModel.gender,
            phone:PatientModel.phone,
            emergency:PatientModel.emergency,

        })
        const newPatient = await patient.save()
        return newPatient
    }catch (err) {
        throw new Error('Could not add patient.');
    }
};


module.exports.addNewePrescription = async (prescriptionDetails) =>{
    try{
        const prescription = new PatientModel.eprescription({
            DrName:prescriptionDetails.DrName,
            PName:prescriptionDetails.PName,
            Date:prescriptionDetails.Date,
            details:prescriptionDetails.prescription,

        })
        const newePrescription = await prescription.save()
        return newePrescription
    }catch (err) {
        throw new Error('Could not add prescription.');
    }     
};


module.exports.addNeweMedicalRecord = async (MedicalRecordDetails) =>{
    try{
        const record = new PatientModel.MedicalRecordDetails({
            name:MedicalRecordDetails.name,
            age:MedicalRecordDetails.age,
            gender:MedicalRecordDetails.gender,
            weight:MedicalRecordDetails.weight,
            height:MedicalRecordDetails.height,
            diseases:MedicalRecordDetails.diseases,
        })
        const neweMedicalRecord = await record.save()
        return neweMedicalRecord
    }catch (err) {
        throw new Error('Could not add medical record.');
    }
};

module.exports.viewPrescription = async () => {
    try {
        // bokra b2a ISA
    } catch (err) {
        throw new Error('Could not find any prescription.');
    }
};

module.exports.viewMedicalRecord = async () => {
    try {
        // bokra b2a ISA
    } catch (err) {
        throw new Error('Could not find any medical record.');
    }
};