const knex = require("../config/db")

getAllData = (req, res) =>{
    knex.select("*").from("saral_api")
    .then((data)=>{
        if(data.length == 0){
            res.send({"status":"error",message:"database is empty"})
        }
        else{
            res.send({'status': 'success', 'count': data.length,data:data})
        }
    })
    .catch((err)=>{
        res.send({'status': 'error', 'message': err.message})
    })
}

getCoursById = (req, res)=>{
    console.log("data.....");
    knex.select("*").from("saral_api").where('id', req.params.id)
    .then((data)=>{
        if(data.length == 0){
            res.send({"status":"error",message:"id not found..."})
        } 
        else{
            res.send({status:"success",count:data.length,data:data})
        }
    }).catch((err)=>{
        console.log(err);
        res.send({"stsud":err})
    })
}

deleteCoursById = (req,res)=>{
    let id = req.params.id
    knex.select("*").from("saral_api").where({"id":id}).del()
    .then((data)=>{
        console.log(data);
        if(data > 0){
            res.send({status:"success",message:"course deleted successfully..."})
        }else{
            res.send({status:"error",message:"id not found..."})
        }
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
        if (data == 0){
            res.send({"status":"success",message:"id not found..."})
        }
        else{
            res.send({"status":"success",message:"course updated successfully..."})
        }
    }).catch((err)=>{
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

