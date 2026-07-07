
import express from "express"
import adminControllers from "../controllers/adminControllers.js"
import protect from "../middleware/authMiddleware.js"



const router = express.Router()

router.get("/users" , protect.forAdmin, adminControllers.getAllUser)



export default router