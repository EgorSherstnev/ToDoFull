const Router = require('express');
const router = new Router();
const listController = require('../controllers/listController');

router.post('/create',listController.createList)
router.put('/update', listController.updateList)
router.delete('/delete/:id', listController.deleteList)

router.get('/get_lists', listController.getLists)
router.get('/get_all_lists',listController.getAllLists)

module.exports = router;