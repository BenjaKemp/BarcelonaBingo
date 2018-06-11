const router      = require('koa-router')();
const UsersController = require('../controller/users.controller');

const {createnew,getAll}  = require('../controller/db.controller.js');

router.post('/newDB', createnew)
router.get('/getall', getAll)
router.post('/users', UsersController.create);
router.get('/sign-in', UsersController.signIn);
module.exports = router;
