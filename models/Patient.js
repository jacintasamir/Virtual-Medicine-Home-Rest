const { Schema, model } = require('mongoose');

const PatientSchema = new Schema({

})

const PatientModel = model('patient', PatientSchema)

module.exports = PatientModel