const taskService = require('../service/taskService')

class TaskController {
   async adding (req,res,next) {
      try {
         const { taskList, taskName, taskDescription } = req.body
         const taskData = await taskService.addingTask( taskList, taskName, taskDescription )
         return res.json(taskData)
      } catch(e) {
         next(e)
      }
   }

   async update (req, res, next) {
      try {
         const { taskList, taskName, taskDescription, unicId } = req.body
         const taskData = await taskService.updateTask( taskList, taskName, taskDescription, unicId )
         return res.json(taskData)
      } catch (e) {
         next(e)
      }
   }

   async getAllLists (req, res, next) {
      try {
         const taskData = await taskService.getAllLists()
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