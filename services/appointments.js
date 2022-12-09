const { ObjectId } = require('mongoose').Types;

const AppointmentDetailsModel = require('../models/Appointment');
const AppointmentModel = require('../models/Appointment');

module.exports.addAppointment= async (appDetails) =>{
    try{
        const appointmentDetails= new AppointmentDetailsModel({
         doctor:  appDetails.doctor,
         timeslots:  appDetails.timeslots,
         paymentMethod: appDetails.paymentMethod
        })
        const newAppointment= await appointmentDetails.save()
        return newAppointment
    } catch (err) {
        throw new Error('could not append Appointment.');
    }
};
module.exports.deleteAppointment= async (appointmentDetailsId) =>{
    try{
        await AppointmentDetailsModel.deleteOne({ _id: appointmentDetailsId});
    } catch (err) {
        throw new Error('could not remove Appointment.');
    }
};
module.exports.sendConfirmationMessage = async () => {
    try {
        const confirmationmessage = await AppointmentDetailsModel.find()
        return confirmationmessage;
    } catch(err) {
        throw new Error('Could not send confirmation message');
    }
};