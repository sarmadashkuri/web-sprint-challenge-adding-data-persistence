const db = require('../../data/dbConfig');

async function getTasks() {
   const tasks = await db('tasks')
    .join('projects', 'tasks.project_id', 'projects.project_id')
    .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description')
   const tasksWithBoolean = tasks.map(task => ({
    ...task,
    task_completed: Boolean(task.task_completed),
  }));

  return tasksWithBoolean;
}

async function getTaskById(task_id) {
    const task = await db('tasks').select('*').where('task_id', task_id).first()
    const taskWithBoolean = {
        ...task,
        task_completed: Boolean(task.task_completed),
      };
  
      return taskWithBoolean;
}

async function postTask(newTask) {
    const [taskId] = await db('tasks').insert(newTask);
    return taskId;
}

module.exports = {
    getTasks,
    getTaskById,
    postTask,
}
