const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// import the function that ininitiates a DB connection.
const initiateDBConnection = require('./config/db');

// import our productsRouter
////const productsRouter = require('./routes/products');

// Let the dotenv package read and parse environment variables in the ./config/.env file
dotenv.config({
  path: './config/.env'
});

// Access the port environment variable using process.env
const PORT = process.env.PORT;
const app = express();

// an express middleware to parse JSON data in request body.
app.use(express.json());

// a middleware to allow HTTP requests from other servers
app.use(cors());

// Load the productsRouter and set its entry route to '/products'.
// This means that any route defined inside the productsRouter will be prefixed by '/products' first.
////app.use('/products', productsRouter);

app.listen(PORT, async () => {
  console.log(`Server has been started and is listening to port ${PORT}`);
  // Call the asynchronous function to initiate the DB connection once the server starts listening.
  await initiateDBConnection();
});