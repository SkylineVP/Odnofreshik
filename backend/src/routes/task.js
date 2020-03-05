const express = require("express");
const {TaskController} = require('../controllers');
const {extractTaskId} = require('./../middlewares/task');

const taskRouter = express.Router();

taskRouter.route('/task(/:id)?')
    .post(TaskController.createTask)
    .all(extractTaskId)
    .get(TaskController.getTaskById)
    .patch(TaskController.updateTaskById)
    .delete(TaskController.deleteTaskById);

taskRouter.route('/tasks')
    .get(TaskController.getUserTasks);

module.exports = taskRouter;