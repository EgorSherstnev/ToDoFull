const taskService = require('../service/taskService')

class TaskController {
   async adding (req,res,next) {
      try {
         const { taskDescription } = req.body
         const taskData = await taskService.adding(taskDescription)
         return res.json(taskData)
      } catch(e) {
         next(e)
      }
   }
}