const { Schema, model } = require('mongoose');

const AppointmentSchema = new Schema({
name:{
    type: 'String',
    required: true
},
gender:{
    type: 'Bool',
    required: true
},
age:{
    type: 'Number',
    required: true
},
appointmentType:{
    type: 'Array',
    items:{
        type: 'String',
        enum:['Reserve An Appointment','Edit Appointment']
    },
    required: true
},
})
const AppointmentDetailsSchema = new Schema({
doctor:{
    type: 'String',
},
timeSlots:{
    type: 'Array',
    items: [
        {enum: ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00']},
        {enum: ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00']}
    ],
    
},
paymentMethod:{
    type: 'Array',
    items:{
        type: 'String',
        enum: ['Cash','CreditCard']
    },
},
     required: true
})

const AppointmentModel = model('appointment', AppointmentSchema)
const AppointmentDetailsModel = model('appointmentDetails', AppointmentDetailsSchema)

module.exports = AppointmentModel
module.exports = AppointmentDetailsModel