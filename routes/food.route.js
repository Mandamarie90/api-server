'use strict';

// All routing and data management for "people"

const express = require('express');

const router = express.Router();

const {Food} = require('../models/index.js');


// RESTful route definitions
router.get('/food', getFood);
router.get('/food:id', getOneFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

// ROUTE HANDLERS
async function getFood( request, response ) {
  let data = await Food.findAll();
  response.status(200).json(data);
}

async function getOneFood( request, response ) {
  let id = request.params.id;
  let data = await Food.findOne({where: {id:id}});
  response.status(200).json(data);
}

async function createFood( request, response ) {
  let data = request.body;
  let newFood = await Food.create(data);
  response.status(200).json(newFood);
}

async function updateFood( request, response ) {
  let id = request.params.id;
  let data = request.body;
  let food = await Food.findOne({where: {id:id}});
  let updatedFood = await food.update(data);
  response.status(200).json(updateFood);
}

async function deleteFood( request, response ) {
  let id = request.params.id;
  let deletedFood = await Food.destroy( {where: {id:id}} );
  if ( typeof deletedFood === 'number' ) {
    response.status(204).send(null);
  } else {
    throw new Error("Error deleting record");
  }
}



module.exports = router;
