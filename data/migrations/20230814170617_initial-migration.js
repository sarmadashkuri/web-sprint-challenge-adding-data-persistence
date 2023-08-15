/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', table => {
        table.increments('project_id')
        table.string('project_name', 128).notNullable()
        table.string('project_description', 256)
        table.boolean('project_completed').defaultTo(false)
    })
    .createTable('resources', table => {
        table.increments('resource_id')
        table.string('resource_name', 128).notNullable().unique()
        table.string('resource_description', 256)
    })
    .createTable('tasks', table => {
        table.increments('task_id')
        table.string('task_description', 256).notNullable()
        table.string('task_notes', 256)
        table.boolean('task_completed').defaultTo(false)
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
    .createTable('project_resources', table => {
        table.increments('id').primary();
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
    .dropTable('project_resources')
    .dropTable('tasks')
    .dropTable('resources')
    .dropTable('projects')
};
