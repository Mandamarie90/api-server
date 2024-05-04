'use strict';

const express = require('express');
const router = express.Router();

const {Authors, Books} = require('../models/index.js');

const Model = Authors;

router.get('/authors', getAll);
router.get('/authors/:id', getOne);
router.post('/authors', createRecord);
router.put('/authors/:id', updateRecord);
router.delete('/authors/:id', deleteRecord);

async function getAll( request, response ) {
  let data = await Model.read( null, {
    include: {
      model: Books.model,
    },
  });
  response.status(200).json(data);
}

async function getOne( request, response ) {
  let id = request.params.id;
  let data = await Model.read(id, {
    include: {
      model: Books.model,
    },
  });
  response.status(200).json(data);
}

async function createRecord( request, response ) {
  let data = request.body;
  let newRecord = await Model.create(data);
  response.status(201).json(newRecord);
}

async function updateRecord( request, response ) {
  let id = request.params.id;
  let data = request.body;
  let updatedRecord = await Model.update(id, data);
  response.status(200).json(updatedRecord);
}

async function deleteRecord( request, response ) {
  let id = request.params.id;
  let deletedRecord = await Model.delete(id);
  if ( typeof deletedRecord === 'number' ) {
    response.status(204).send(null);
  } else {
    throw new Error('Error deleting record');
  }
}
module.exports = router;
