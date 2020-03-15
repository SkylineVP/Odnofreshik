import authenticationRouter from './authentication';
const express = require('express');
const userRouter = require('./user');
const taskRouter = require('./task');
const {checkAuthorization} = require('../middlewares/user');
const adminRouter = require('../routes/admin.js');
const errorHandler = require('../middlewares/error_handlers');
const router = express.Router();

router.use('/admin', adminRouter);
router.use(authenticationRouter);
router.use(checkAuthorization);
router.use(userRouter);
router.use(taskRouter);
//router.use(errorHandler);

module.exports = router;