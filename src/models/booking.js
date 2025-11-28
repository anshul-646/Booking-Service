'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      // define association here later
    }
  }

  Booking.init(
    {
      flightId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('InProcess', 'Booked', 'Cancelled'),
        allowNull: false,
        defaultValue: 'InProcess'
      },
      noOfSeats : {
        type : DataTypes.INTEGER,
        allowNull : false,
        defaultValue : 0
      },
      totalCost : {
        type : DataTypes.INTEGER,
        allowNull: false,
        defaultValue : 0
      }
    },
    {
      sequelize,
      modelName: 'Booking'
    }
  );

  return Booking;
};