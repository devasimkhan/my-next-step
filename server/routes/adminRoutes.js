
import express from "express"
import adminControllers from "../controllers/adminControllers.js"
import protect from "../middleware/authMiddleware.js"



const router = express.Router()

router.get("/users" , protect.forAdmin, adminControllers.getAllUser)
router.post("/category" , protect.forAdmin , adminControllers.createCategory)
router.get("/category" , protect.forAdmin , adminControllers.getAllCategory)
router.post("/career/:cid"   , adminControllers.createCareer)
router.get("/career" ,  adminControllers.getAllCareer)
router.get("/career/category/:cid" , adminControllers.getCareerByCategoryId)
export default router