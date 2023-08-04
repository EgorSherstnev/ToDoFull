const Router = require('express');
const router = new Router();
const listController = require('../controllers/listController');

router.post('/create',listController.createList)
router.put('/update', listController.updateList)
router.delete('/delete', listController.deleteList)

module.exports = router;