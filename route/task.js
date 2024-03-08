const express=require("express")
const router=express.Router()
const {addTask,getTasks}=require("../controller/task")

router.post("/addTask",addTask)
router.get("/getTask",getTasks)
router.get("/getTask/:id",getTasks)
router.put("updateTask/:id")
router.delete("deleteTask/:id")

module.exports=router

