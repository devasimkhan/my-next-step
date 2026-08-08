import express from "express"
import counselorControllers from "../controllers/counselorControllers.js"
import protect from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/counselor" , protect.forUser, counselorControllers.becomeACounselor)
router.get("/counselor" , counselorControllers.getActiveCounselors)


export default router