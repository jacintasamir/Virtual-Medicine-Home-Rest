// import Express Router from express
const { Router } = require('express');

// import our productsController
const patientController = require('../controllers/patients');
const authMiddlewares = require('../middelwares/authorization');


// create an instance of Express Router.
const patientsRouter = Router();

// GET 
patientsRouter.get('/',patientController.getDoctors);

// POST 
patientsRouter.post('/', authMiddlewares.auth, patientController.postDoctor);



module.exports = patientsRouter;

