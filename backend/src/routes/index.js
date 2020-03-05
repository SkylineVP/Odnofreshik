const express = require('express');
const userRouter = require('./user');
const taskRouter = require('./task');
const {checkAuthorization} = require('../middlewares/user');
const adminRouter = require('../routes/admin.js');
const errorHandler = require('../middlewares/error_handlers');
const router = express.Router();

router.use('/admin', adminRouter);
router.route('/sign_in').post((req, res, next) => res.send('6'));
router.use(checkAuthorization);
router.use(userRouter);
router.use(taskRouter);
router.use(errorHandler);

module.exports = router;