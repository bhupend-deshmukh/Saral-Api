const express = require("express")
const router  = express.Router()
const {getAllData,getCoursById,deleteCoursById,updateDataById,addNewCours}  = require("../controllers/meraki")

router.get("/merakiApi/getAllData", getAllData)
router.get("/merakiApi/getCoursById/:id", getCoursById)
router.delete("/merakiApi/deleteCoursById/:id", deleteCoursById)
router.put("/merakiApi/updateDataById/:id",updateDataById)
router.post("/merakiApi/addNewCours",addNewCours)

module.exports = router


