const db = require('../../data/dbConfig');

async function getProjects() {
   const projects = await db('projects').select('*')
   const projectsWithBoolean = projects.map(project => ({
    ...project,
    project_completed: Boolean(project.project_completed),
  }));

  return projectsWithBoolean;
}

async function getProjectById(project_id) {
    const project = await db('projects').select('*').where('project_id', project_id).first()
    const projectWithBoolean = {
        ...project,
        project_completed: Boolean(project.project_completed),
      };
  
      return projectWithBoolean;
}

async function postProject(newProject) {
    const [projectId] = await db('projects').insert(newProject);
    return projectId;
}

module.exports = {
    getProjects,
    getProjectById,
    postProject,
}
