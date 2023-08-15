const projects = [
    { project_name: 'Project 1', project_description: 'Description 1', project_completed: false },
    { project_name: 'Project 2', project_description: 'Description 2', project_completed: true },
  ]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
}