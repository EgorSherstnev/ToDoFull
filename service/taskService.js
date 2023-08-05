const ApiError = require("../error/ApiError")
const { Task, List } = require('../models/models')
const uuid = require('uuid')

class TaskService {
   async createTask ( listId, taskName, taskDescription) {
      const unicId = uuid.v1()

      try {
         const existingList = await List.findOne({ where: { id: listId } });
         if (!existingList) {
            throw ApiError.badRequest('Список с таким именем не существует');
         }

         const task = await Task.create({
            taskName, 
            taskDescription, 
            unicId,
            listId: existingList.id
         })

         return task
      } catch (error) {
         throw error
      }
   }

   async updateTask (taskName, taskDescription, unicId) {
      try {
         const task = await Task.findOne({where: {unicId: unicId}})
         if (!task) {
            throw ApiError.badRequest('Такая задача не найдена')
         }
         //Обновление значений
         task.taskName = taskName;
         task.taskDescription = taskDescription;

         //Сохранение обновленного значения в БД
         await task.save()
         return task;
      } catch (error) {
         throw error
      }
   }

   async getTasksByList(listId) {
      try {
         const existingList = await List.findOne({ where: { id: listId } });
         if (!existingList) {
            throw ApiError.badRequest('Список с таким именем не существует');
         }

         const tasks = await Task.findAll({
            where: { listId: existingList.id}
         })

         return tasks;
      } catch (error) {
         throw error;
      }
   }

   async getAllTasks() {
      const tasks = await Task.findAll();
      return tasks;
   }

   async deleteTask (unicId) {
      try {
         //Поиск задачи
         const task = await Task.findOne({where: {unicId: unicId}})
         if (!task) {
            throw ApiError.badRequest('Такая задача не найдена')
         }
         //Удаление задачи 
         await task.destroy()
         return { message: 'Задача успешно удалена'}
      } catch (error) {
         throw error
      }
   }
}

module.exports = new TaskService();