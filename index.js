'use strict';

require('dotenv').config();

const { start } = require('./server.js');
const { db } = require('./models/index.js');

db.sync()
  .then( () => {
    start(process.env.PORT);

  })
  .catch(console.error);
