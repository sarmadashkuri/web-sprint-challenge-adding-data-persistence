const tasks = [
    { task_description: 'Task 1', task_notes: 'Task Notes 1', task_completed: false, project_id: 1 },
    { task_description: 'Task 2', task_notes: 'Task Notes 2', task_completed: true, project_id: 1 },
]

exports.seed = async function (knex) {
    await knex('tasks').insert(tasks)
}