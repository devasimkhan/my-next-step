import express from "express"
import counselorControllers from "../controllers/counselorControllers.js"
import protect from "../middleware/authMiddleware.js"

const router = express.Router()

router.get("/counselor" , protect.forUser, counselorControllers.becomeACounselor)



export default router