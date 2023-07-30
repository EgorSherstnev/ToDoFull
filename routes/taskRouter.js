const Router = require('express');
const router = new Router();
const taskController = require('../controllers/taskController');

router.post('/adding', taskController.adding)
router.put('/update', taskController.update)

router.delete('/delete', taskController.delete)

module.exports = router;