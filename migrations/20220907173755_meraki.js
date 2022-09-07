exports.up = function(knex) {
    knex.schema
      .createTable("saral_api", (table) => {
        table.increments("id");
        table.string("name");
        table.string("logo");
        table.string("notes");
        table.string("days_to_complete");
        table.string("short_description");
        table.string("type");
        table.string("course_type");
        table.string("lang_available");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("saral_api")
};
