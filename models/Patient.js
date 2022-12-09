const { Schema, model } = require('mongoose');

const PatientSchema = new Schema({
    ssn:{
        type:'ObjectId',
        required: true
    },
    
    name: {
        type: 'String',
        required: true
    },
    
    age: {
        type: 'Number',
        required: true
    },
    
    gender:{
        type:'Boolean',
        required: true
    },
    
    phone:{
        type:'Number',
        required: true
    },

    emergency:{
        type:'Number',
        required: true
    },

    eprescription:{
        DrName: {
            type: 'String',
            required: true
        },

        PName: {
            type: 'String',
            required: true
        },

        Date:{
            type: 'Date',
            required: true
        },

        details: {
            type: 'String',
            required: true 
        },
        required: false
    },


    MedicalRecord :{
        name: {
            type: 'String',
            required: true
        },
        
        age: {
            type: 'Number',
            required: true
        },
        
        gender:{
            type:'Boolean',
            required: true
        },
        
        weight: {
            type:'Number',
            required: true
        },

        height: {
            type:'Number',
            required: true
        },

        diseases : {
            type: 'Array',
            items: {
                type: 'String',
                enum: ['diabetes', 'Heart diseas', 'Blood preasure', 'Allergic diseas', 'Malaria', 'Lung diseas', 'cholesterol','Cancer']
            }, 
            required: true
        }
    }   
   
})

const PatientModel = model('patient', PatientSchema)

module.exports = PatientModel