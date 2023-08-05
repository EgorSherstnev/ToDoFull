const taskService = require('../service/taskService')

class TaskController {

   async create (req,res,next) {
      try {
         const { listId, taskName, taskDescription } = req.body
         const taskData = await taskService.createTask( listId, taskName, taskDescription )
         return res.json(taskData)
      } catch(e) {
         next(e)
      }
   }

   async update (req, res, next) {
      try {
         const { taskName, taskDescription, unicId } = req.body
         const taskData = await taskService.updateTask( taskName, taskDescription, unicId )
         return res.json(taskData)
      } catch (e) {
         next(e)
      }
   }

   async getTasksByList (req, res, next) {
      try {
         const { listId } = req.body
         const taskData = await taskService.getTasksByList(listId)
         return res.json(taskData)
      } catch(e) {
         next(e)
      }
   }

   async getAllTasks(req, res, next) {
      try {
         const taskData = await taskService.getAllTasks()
         return res.json(taskData)
      } catch(e) {
         next(e)
      }
   }

   async delete (req, res, next) {
      try {
         const {unicId} = req.body
         const taskData = await taskService.deleteTask(unicId)
         return res.json(taskData)
      } catch (e) {
         next(e)
      }
   }
}

module.exports = new TaskController();