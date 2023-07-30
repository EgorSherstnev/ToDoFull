const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Task = sequelize.define('task', {
   id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
   taskDescription: {type: DataTypes.STRING, allowNull: false},
})

module.exports = {
   Task
}