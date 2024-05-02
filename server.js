'use strict';

const express = require('express');
const cors = require('cors');

const app = express();
const logger = require('./middleware/logger.js')

const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');

const foodRoutes = require('./routes/food.route.js');
// const animalRoutes = require('./routes/animals.route.js');
// const carsRoutes = require('./routes/cars.route.js')

app.use(cors());
app.use(logger());
app.use(express.json());

app.use(foodRoutes);
// app.use(animalRoutes);
// app.use(carsRoutes);

// Force an error for the tests
app.get('/broken', (req,res,next) => next('whoops!'));

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => {
    console.log(`Server is up on ${port}`);
  });
}

module.exports = { app, start };
