const express = require('express');
const Project = require('./model')
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.getProjects();
        res.json(projects);
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { project_name } = req.body;
        if (!project_name) {
            next({ status: 400, message: 'project_name is required'})
        } else {
            const newProjectId = await Project.postProject(req.body);
            const newProject = await Project.getProjectById(newProjectId);
            res.status(201).json(newProject)
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router;