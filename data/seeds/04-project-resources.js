const project_resources = [
    { project_id: 1, resource_id: 1 },
    { project_id: 1, resource_id: 2 },
]

exports.seed = async function (knex) {
    await knex('project_resources').insert(project_resources)
}