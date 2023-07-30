const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Task = sequelize.define('task', {
   id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
   taskList: {type: DataTypes.STRING, allowNull: false},
   taskName: {type: DataTypes.STRING, allowNull: false},
   taskDescription: {type: DataTypes.STRING},
   unicId: {type: DataTypes.STRING},
})

module.exports = {
   Task
}