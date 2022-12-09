const { Schema, model } = require('mongoose');

const BloodDonationSchema = new Schema({
    bloodType: {
        type: 'String',
        required: true
    },
    inventory: {
        type: 'Bool',
        required: true
    }

})
const VolunteerSchema = new Schema({
    name: {
        type: 'String',
        required: true
    },
    age: {
        type: 'Number',
        required: true
    },
    phone: {
        type: 'Number',
        required: true
    },
    email: {
        type: 'String',
        required: false
    },
    ssn: {
        type: 'String',
        required: true
    },
    diseases: {
        type: 'Array',
        items: {
            type: 'String',
            enum: ['Heart Disease', 'Sexually Transmitted Diseases', 'Allergic Disease', 'Kidney Disease']
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
        },
        required: true
    },
    bloodType: {
        type: 'String',
        required: true
    },
    required: false
})

const RecipientSchema = new Schema({
    name: {
        type: 'String',
        required: true
    },
    age: {
        type: 'Number',
        required: true
    },
    phone: {
        type: 'Number',
        required: true
    },
    ssn: {
        type: 'String',
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
        },
        required: true
    },
    bloodType: {
        type: 'String',
        required: true
    },
    required: false
})

const BloodDonationModel = model('bloodDonation', BloodDonationSchema)
const VolunteerModel = model('volunteer', VolunteerSchema)
const RecipientModel = model('recipient', RecipientSchema)

module.exports = BloodDonationModel
module.exports = VolunteerModel
module.exports = RecipientModel