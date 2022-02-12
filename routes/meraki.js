const express = require("express")
const router  = express.Router()
const {listCourses, deleteCourse, updateDataById, addNewCours}  = require("../controllers/meraki")

router.get("/", getAllData)
router.get("/:id", getCoursById)
router.delete("/:id", deleteCoursById)
router.put("/:id",updateDataById)
router.post("/",addNewCours)

module.exports = router


