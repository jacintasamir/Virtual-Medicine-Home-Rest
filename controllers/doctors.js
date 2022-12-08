const doctorsService = require('../services/doctors');

module.exports.getProduct = async (req, res) => { //one product
    // notice how we extract the productId from the dynamic route that should be /products/:productId
    const productId = req.params.productId;
    try {
      const product = await productsService.findProductById(productId);
      if (!product) {
        return res.status(404).send({
          error: 'Product not found.'
        });
      }
      return res.send({
        product: product
      });
    } catch (err) {
      res.status(500).send({
        error: err.message
      });
    }
  };

  module.exports.getProducts = async (req, res) => { //all products
    try {
      const products = await productsService.findAllProducts();
      return res.send({ products });
    } catch (err) {
      // this denotes a server error, therefore status code should be 500.
      res.status(500);
      return res.send({
        error: err.message
      });
    }
  };
  
  module.exports.postDoctor = async (req, res) => {
    const doctorInfo = {
        name: doctorDetails.name,
        specialization: doctorDetails.specialization,
        schedule: {
            workdays: doctorDetails.workdays,
            workhours: doctorDetails.workhours
        },
        location: {
            lat: doctorDetails.lat,
            lon: doctorDetails.lon
        }
    }
    try {
      const addedDoctor = await productsService.addNewDoctor(doctorInfo);
      return res.status(201).send({
        msg: 'Doctor added successfully.',
        doctorId: addedDoctor._id
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
  };
  
  module.exports.deleteDoctor = async (req, res) => {
    const doctorId = req.params.doctorId;
    try {
      await doctorsService.removeDoctor(doctorId);
      return res.send({
        msg: 'Doctore deleted successfully.'
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
  };