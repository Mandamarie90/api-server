'use strict';

const Cars = (dbInstance, DataTypes) =>
  dbInstance.define ('Cars', {
    make:{
      type: DataTypes.STRING,
      allowNull:false,
    },

    model:{
      type: DataTypes.STRING,
      allowNull:false,
    },

  });

// Food.create({name: 'banana', calories: 200}); // Creates a new reord in our SQl table, filling in the 'name' and 'calories' columns.
// Food.findAll();  // Reads a record where the id matches.

module.exports = Cars;
