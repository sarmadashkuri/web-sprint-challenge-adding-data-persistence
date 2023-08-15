const express = require('express');
const Task = require('./model');
const Project = require('../project/model');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.getTasks();
        res.json(tasks);
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { task_description, project_id } = req.body;
        const existingProject = await Project.getProjectById(project_id)
        if (!task_description || !project_id) {
            next({ status: 400, message: 'task_description and project_id are required'})
        } else if (!existingProject) {
            next({ status: 400, message: 'project_id does not exist'})
        } else {
            const newTaskId = await Task.postTask(req.body);
            const newTask = await Task.getTaskById(newTaskId);
            res.status(201).json(newTask)
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router;
