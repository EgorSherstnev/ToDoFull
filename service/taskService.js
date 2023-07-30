//const ApiError = require("../error/ApiError")
const { Task } = require('../models/models')

class TaskService {
   async adding (taskDescription) {
      try {
         const task = await Task.create({taskDescription})
         return res.json({task})
      } catch (e) {
         next(e)
      }
   }
}

module.exports = new TaskService();