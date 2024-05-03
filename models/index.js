// models/index.js
'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const Collection = require('./collection.js');

const foodModel = require('./food.js');
const animalModel = require('./animal.js');
const booksSchema = require('./books.model.js');
const authorSchema= require('./authors.model.js');





const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;
console.log('Database URL:', DATABASE_URL);

let sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});


const booksModel = booksSchema(sequelize, DataTypes);
const authorModel = authorSchema(sequelize, DataTypes);

authorModel.hasMany(booksModel, {foreignKey:'authorId', sourceKey: 'id'});
booksModel.belongsTo(authorModel,{foreignKey:'authorId', targetKey:'id'});

const authorCollection = new Collection(authorModel);
const booksCollection = new Collection(booksModel);

module.exports = {
  db: sequelize,
  Food: foodModel(sequelize, DataTypes),
  Animal: animalModel(sequelize, DataTypes),
  Author: authorCollection,
  Books: booksCollection
};
