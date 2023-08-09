const Router = require('express');
const router = new Router();
const taskController = require('../controllers/taskController');

router.post('/create', taskController.create)
router.put('/update', taskController.update)

router.get('/get_tasks_by_list', taskController.getTasksByList);
router.get('/get_all_tasks', taskController.getAllTasks);

router.delete('/delete/:unicId', taskController.delete)

module.exports = router;