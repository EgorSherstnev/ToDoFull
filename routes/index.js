const Router = require('express');
const router = new Router();
const taskRouter = require('./taskRouter');
const listRouter = require('./listRouter');

router.use('/list', listRouter)
router.use('/task', taskRouter)

module.exports = router;