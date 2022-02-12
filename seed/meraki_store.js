const knex = require("../config/db");
const axios = require("axios");
function insert_data() {
  knex
    .select("*")
    .from("saral_api")
    .then((data) => {
      if (data.length == 0) {
        axios
          .get("http://api.navgurukul.org/courses")
          .then((res) => {
            console.log(res.data.length, "haach houn rayala");
            for (let v of res.data) {
                v['lang_available'] = v['lang_available'].join(", ")
                console.log(v);

              knex("saral_api")
                .insert(v)
                .then(() => {
                    // console.log("data added success");
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
}

module.exports = insert_data;