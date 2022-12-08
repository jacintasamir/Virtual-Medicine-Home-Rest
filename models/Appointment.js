const { Schema, model } = require('mongoose');

const AppointmentSchema = new Schema({

})

const AppointmentModel = model('appointment', AppointmentSchema)

module.exports = AppointmentModel