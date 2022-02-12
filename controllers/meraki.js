const knex = require("../config/db")

getAllData = (req, res) =>{
    knex.select("*").from("saral_api")
    .then((data)=>{
        res.send({'data':data, 'status': 'success', 'count': data.length})
    })
    .catch((err)=>{
        res.send({'status': 'error', 'message': err})
    })
}

getCoursById = (req, res)=>{
    console.log("data.....");
    knex.select("*").from("saral_api").where('id', req.params.id)
    .then((data)=>{
        console.log();
        res.send(data)
    }).catch((err)=>{
        console.log(err);
        res.send({"stsud":err})
    })
}

deleteCoursById = (req,res)=>{
    knex.select("*").from("saral_api").where("id",req.params.id).del()
    .then((data)=>{
        res.send({"status":"success", "id GETdeleted":req.params.id})
    })
    .catch((err)=>{
        res.send({"status":err})
    })
}

updateDataById = (req,res)=>{
    knex("saral_api")
    .where('id',req.params.id)
    .update(req.body)
    .then((data)=>{
        res.send({"status":"update success"})
    })
    .catch((err)=>{
        res.send({"status":err})
    })
}

addNewCours = (req,res)=>{
    knex("saral_api")
    .insert(req.body)
    .then((data)=>{
        res.send({"status":"new cours inserted"})
    })
    .catch((err)=>{
        res.send({"status":err})
    })
}

module.exports = {getAllData,getCoursById,deleteCoursById,updateDataById,addNewCours}

