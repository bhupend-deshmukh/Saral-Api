const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "Bhupendra@123",
        database: "meraki_api"
    },
});


knex.schema.hasTable("saral_api").then(function (exists) {
  if (!exists) {
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
      .then((data) => {
        console.log("Table Created.....");
      })
      .catch((err) => {
        console.log(err, 'table.....');
      });
  }
});

module.exports = knex