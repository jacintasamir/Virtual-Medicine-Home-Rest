// import Express Router from express
const { Router } = require('express');

// import our productsController
const doctorsController = require('../controllers/doctors');
const authMiddlewares = require('../middelwares/authorization');

// create an instance of Express Router.
const doctorsRouter = Router();

// GET 
doctorsRouter.get('/',doctorsController.getDoctors);

// POST 
doctorsRouter.post('/', authMiddlewares.auth, doctorsController.postDoctor);

//GET by filters
doctorsRouter.get('/filter', doctorsController.filterDoctors);

//DELETE by ID
doctorsRouter.delete('/:doctorId', doctorsController.deleteDoctor);


module.exports = doctorsRouter;