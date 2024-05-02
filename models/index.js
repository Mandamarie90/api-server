'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

let sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});
sequelize.sync({ force:true});

// let animals = require('./animals.js');
// let cars = require('./cars.js');
let foods= require('./food.model.js');

module.exports = {
  db: sequelize,
  // Animal: animals(sequelize, DataTypes),
  // Cars: cars(sequelize, DataTypes),
  Food: foods(sequelize, DataTypes),
};
