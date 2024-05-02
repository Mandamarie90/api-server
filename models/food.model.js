'use strict';

const Food = (dbInstance, DataTypes) =>
  dbInstance.define ('Food', {
    name:{
      type: DataTypes.STRING,
      allowNull:false,
    },

    type:{
      type: DataTypes.STRING,
      allowNull:false,
    },

  });

// Food.create({name: 'banana', calories: 200}); // Creates a new reord in our SQl table, filling in the 'name' and 'calories' columns.
// Food.findAll();  // Reads a record where the id matches.

module.exports = Food;
