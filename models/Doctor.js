const { Schema, model } = require('mongoose');

const DoctorSchema = new Schema({
    name: {
        type: 'String',
        required: true
    },
    specialization: {
        type: 'String',
        required: true
    },
    schedule: {
        workDays: {
            type: 'Array',
            items: {
                type: 'String',
                enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            }  
        },
        workHours: {
            type: 'Array',
            prefixItems: [
                {enum: ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00']}, //from
                {enum: ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00']} //to
            ],
            items: false //cannot add beyond defined prefixItems
        },
        required: true
    },
    location: {
        lat: {
          type: 'Number',
          required: true
        },
        lng: {
          type: 'Number',
          required: true
        }
    },
    reviews: {
        type: 'Array',
        feedback: {
            type: 'Array',
            prefixItems: [
                {type: 'Number'}, //rating out of 5*
                {type: 'String'}, //name
                {type: 'String'}, //comment
                {type: 'String'} //location of doctor (as address received by external service)
            ],
            items: false
        }
    }
}) 

const DoctorModel = model('doctor', DoctorSchema)

module.exports = DoctorModel