const ApiError = require("../error/ApiError");
const { List, Task } = require("../models/models");

class ListService {
   async createList(taskList) {
      try {
         // Проверка, существует ли уже список с таким названием
         const existingList = await List.findOne({ where: { taskList: taskList } });
         if (existingList) {
            throw ApiError.badRequest('Такой список уже существует');
         }

         // Создание новой записи списка
         const newList = await List.create({ taskList });
         return newList;
      } catch (error) {
         throw error;
      }
   }

   async updateList(id,taskList) {
      try {
         const existingList = await List.findOne({ where: { id: id } });
         if(!existingList) {
            throw ApiError.badRequest('Такого списка не существует');
         }

         //Обновление наименования списка
         existingList.taskList = taskList;

         //Сохранение обновленного значения в БД
         await existingList.save()
         return existingList;
      } catch (error) {
         throw error;
      }
   }

   async deleteList(id) {
      try {
         const existingList = await List.findOne({where: { id: id}})
         if (!existingList) {
            throw ApiError.badRequest('Такого списка не существует')
         }

         //Удаление связанных задач 
         await Task.destroy({ where: { listId: id } });

         //Удаление листа
         await existingList.destroy()
         return { message: 'Список удален'}
      } catch (error) {
         throw error;
      }
   }

   async getLists(page, pageSize) {
      try {
         const offset = (page - 1) * pageSize;
         const lists = await List.findAll({
            offset,
            limit: pageSize,
         });
         if (!lists) {
            return { message: 'Создайте список задач'}
         }
         return lists;
      } catch (error) {
         throw error;
      }
   }

   async getAllLists() {
      try {
         const lists = await List.findAll();
         if (!lists) {
            return { message: 'Создайте список задач'}
         }
         return lists;
      } catch (error) {
         throw error;
      }
   }
}

module.exports = new ListService();