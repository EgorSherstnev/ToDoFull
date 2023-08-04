const listService = require('../service/listService');

class ListController {
   
   async createList (req, res, next) {
      try {
         const { taskList } = req.body
         const listData = await listService.createList( taskList )
         return res.json(listData)
      } catch (e) {
         next (e)
      }
   }
   async updateList(req, res, next) {
      try {
         const { id, taskList } = req.body
         const listData = await listService.updateList( id, taskList )
         return res.json(listData)
      } catch (e) {
         next (e)
      }
   }

   async deleteList(req,res,next) {
      try {
         const { id } = req.body
         const listData = await listService.deleteList(id)
         return res.json(listData)
      } catch(e){
         next(e)
      }
   }

   async getLists(req,res,next) {
      try {
         const { page, pageSize } = req.body
         const listData = await listService.getLists( page, pageSize )
         return res.json(listData)
      } catch(e){
         next(e)
      }
   }

   async getAllLists(req,res,next) {
      try {
         const listData = await listService.getAllLists()
         return res.json(listData)
      } catch(e){
         next(e)
      }   
   }
}

module.exports = new ListController();