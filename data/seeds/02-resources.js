const resources = [
    { resource_name: 'Resource 1', resource_description: 'Resource Description 1' },
    { resource_name: 'Resource 2', resource_description: 'Resource Description 2' },
  ]

exports.seed = async function (knex) {
    await knex('resources').insert(resources)
}