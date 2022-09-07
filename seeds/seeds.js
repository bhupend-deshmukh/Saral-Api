const axios = require("axios")
exports.seed =  async function(knex) {
  // Deletes ALL existing entries
  return await axios.get("http://api.navgurukul.org/courses").then(async(res)=>{
    // console.log(res);
    for (let v of res.data) {
      v['lang_available'] = v['lang_available'].join(", ")
      console.log(v);
      await knex("saral_api")
      .insert(v)
      .then(() => {
      }).catch((err) => {
        console.log(err.message);
      });
    }
  }).catch((err)=>{
    console.log(err.message);
  })
};
