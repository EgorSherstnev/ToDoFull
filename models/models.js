const sequelize = require('../db');
const {DataTypes} = require('sequelize');

// const Task = sequelize.define('task', {
//    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//    taskList: {type: DataTypes.STRING, allowNull: false},
//    taskName: {type: DataTypes.STRING, allowNull: false},
//    taskDescription: {type: DataTypes.STRING},
//    unicId: {type: DataTypes.STRING},
// })

const List = sequelize.define('list', {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
   taskList: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Task = sequelize.define('task', {
   id: { type: DataTypes.INTEGER, autoIncrement: true },
   taskName: { type: DataTypes.STRING, allowNull: false },
   taskDescription: { type: DataTypes.STRING },
   unicId: { type: DataTypes.STRING, primaryKey: true },
});


List.hasMany(Task, {
   foreignKey: {
      name: 'listId',
      allowNull: false,
   },
   onDelete: 'CASCADE',
   onUpdate: 'CASCADE',
});

module.exports = {
   List,
   Task,
}