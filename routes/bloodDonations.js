const{Router}=require('express')

const bloodController = require('../controllers/bloodDonations')
const authMiddlewares = require('../middlewares/authorization');

const bloodRouter=Router();

bloodRouter.get('/bloodType', bloodController.searchVolunteers)

bloodRouter.get('/bloodType', bloodController.searchRecipient)

bloodRouter.get('/', bloodController.getVolunteer)

bloodRouter.get('/', bloodController.getRecipient)

bloodRouter.delete('/:volunteerID', authMiddlewares.auth, bloodController.deleteVolutneer)

bloodRouter.delete('/:recipientID', authMiddlewares.auth, bloodController.deleteRecipient)

bloodRouter.post('/', bloodController.addVolunteer)

bloodRouter.post('/', bloodController.addRecipient)