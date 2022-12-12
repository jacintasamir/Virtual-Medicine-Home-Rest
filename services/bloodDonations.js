const { ObjectId } = require('mongoose').Types;

const BloodDonationModel = require('../models/BlodDonation');
const VolunteerModel = require('../models/BlodDonation');
const RecipientModel = require('../models/BlodDonation');

module.exports.addVolunteer = async (volunteerDetails) => {
    try {
        const volunteer = new VolunteerModel({
            name: volunteerDetails.name,
            age: volunteerDetails.age,
            phone: volunteerDetails.phone,
            email: volunteerDetails.email,
            ssn: volunteerDetails.ssn,
            diseases: volunteerDetails.diseases,
            location: {
                lat: volunteerDetails.lat,
                lon: volunteerDetails.lon
            },
            bloodType: volunteerDetails.bloodType
        })
        const newVolunteer = await volunteer.save()
        return newVolunteer
    } catch (err) {
        throw new Error('Could not add volunteer right now, please try again later.');
    }
};

module.exports.removeVolunteer = async (volunteerID) => {
    try {
        await VolunteerModel.deleteOne({ _id: volunteerID });
    } catch (err) {
        throw new Error('Could not delete volunteer.');
    }
};

module.exports.addRecipient = async (recipientDetails) => {
    try {
        const recipient = new RecipientModel({
            name: recipientDetails.name,
            age: recipientDetails.age,
            phone: recipientDetails.phone,
            email: recipientDetails.email,
            ssn: recipientDetails.ssn,
            diseases: recipientDetails.diseases,
            locatios: {
                lat: recipientDetails.lat,
                lon: recipientDetails.lon
            },
            bloodType: recipientDetails.bloodType
        })
        const newRecipient = await recipient.save()
        return newRecipient
    } catch (err) {
        throw new Error('Could not add recipient right now, please try again later.');
    }
};

module.exports.removeRecipient = async (recipientID) => {
    try {
        await RecipientModel.deleteOne({ _id: recipientID });
    } catch (err) {
        throw new Error('Could not delete recipient.');
    }
};

module.exports.findAllVolunteers = async () => {
    try {
        const volunteers = await VolunteerModel.find()
        return volunteers;
    } catch(err) {
        throw new Error('Could not retrieve volunteers');
    }
};

module.exports.findAllRecipient = async () => {
    try {
        const recipient = await RecipientModel.find()
        return recipient;
    } catch(err) {
        throw new Error('Could not retrieve recipients');
    }
};

module.exports.searchVolunteers = async (bloodType) => {
    try {
        const volunteer = await VolunteerModel.find({bloodType: bloodType})
    } catch (err) {
        throw new Error('Could not find any volunteers.')
    }
}

module.exports.searchRecipient = async (bloodType) => {
    try {
        const recipient = await RecipientModel.find({bloodType: bloodType})
    } catch (err) {
        throw new Error('Could not find any recipients.')
    }
}

module.exports.bloodInventory = async () => {
    try {

    } catch(err) {
        throw new Error('Could not retrieve Blood Inventory');
    }
};