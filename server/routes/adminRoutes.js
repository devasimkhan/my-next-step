
import express from "express"
import adminControllers from "../controllers/adminControllers.js"
import protect from "../middleware/authMiddleware.js"



const router = express.Router()

router.get("/users" , protect.forAdmin, adminControllers.getAllUser)
router.post("/category" , protect.forAdmin , adminControllers.createCategory)
router.get("/category" , protect.forAdmin , adminControllers.getAllCategory)
router.post("/career/:cid" ,protect.forAdmin   , adminControllers.createCareer)
router.get("/career" , protect.forAdmin ,  adminControllers.getAllCareer)
router.get("/career/category/:cid" , protect.forAdmin , adminControllers.getCareerByCategoryId)
router.get("/counselors" ,protect.forAdmin , adminControllers.getAllCounselor )
export default router