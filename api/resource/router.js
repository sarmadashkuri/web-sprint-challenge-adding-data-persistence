const express = require('express');
const Resource = require('./model');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.getResources();
        res.json(resources);
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { resource_name } = req.body;
        const existingResource = await Resource.getResourceByName(resource_name);
        if (!resource_name) {
            next({ status: 400, message: 'resource_name is required'})
        } else if (existingResource) {
            next({ status: 400, message: 'resource_name already exists'})
        } else {
            const newResourceId = await Resource.postResource(req.body);
            const newResource = await Resource.getResourceById(newResourceId);
            res.status(201).json(newResource)
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router;
