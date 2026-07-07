

import express from "express"
import authControllers from "../controllers/authControllers.js"
import protect from "../middleware/authMiddleware.js"

const router = express.Router()



router.post("/register" , authControllers.registerUser)
router.post("/login" ,authControllers.loginUser )
router.post("/private" , protect.forUser, authControllers.privateController)


export default router