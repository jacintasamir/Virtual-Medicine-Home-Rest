//Importing The Express Router From Express
const { Router } = require('express');

//Importing The Appointments Controller
const appointmentController= require ('../controllers/appointments');
const authMiddlewares = require('../middelwares/authorization');
//Creating An Instance of Express Router
const appointmentRouter= Router();

appointmentRouter.post('/', authMiddlewares.auth, appointmentController.newappointments);

appointmentRouter.get('/',appointmentController.getappointments);

appointmentRouter.delete('/:appointmentDetailsId', appointmentController.deleteapps);
//Exporting the router instance that was created
module.exports= appointmentRouter;