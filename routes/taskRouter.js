const Router = require('express');
const router = new Router();
const taskController = require('../controllers/taskController');

router.post('/adding', taskController.adding)
router.put('/update', taskController.update)

router.get('/get_all_lists', taskController.getAllLists);
router.get('/get_all_tasks', taskController.getAllTasks);

router.delete('/delete', taskController.delete)

module.exports = router;