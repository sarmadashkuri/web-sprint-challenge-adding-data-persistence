const db = require('../../data/dbConfig');

async function getResources() {
    return db('resources').select('*')
}

async function getResourceByName(resource_name) {
    return db('resources').select('*').where('resource_name', resource_name).first()
}

async function getResourceById(resource_id) {
    return db('resources').select('*').where('resource_id', resource_id).first()
}

async function postResource(newResource) {
    const [resourceId] = await db('resources').insert(newResource);
    return resourceId;
}

module.exports = {
    getResources,
    getResourceByName,
    getResourceById,
    postResource,
}
