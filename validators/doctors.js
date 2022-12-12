const { check } = require('express-validator');

module.exports.valdiatePostDoctor = () => {
  const validationMiddlewares = [
    check('name').notEmpty().withMessage('Doctor name cannot be empty.'),
    check('specialization').notEmpty().withMessage('Must specify specialization.'),
    check('schedule').notEmpty().withMessage('Schedule cannot be empty.'),
    check('location').notEmpty().withMessage('Location required.')
  ];
  return validationMiddlewares;
};