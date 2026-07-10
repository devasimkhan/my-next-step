import express from "express"
import counselorControllers from "../controllers/counselorControllers.js"

const router = express.Router()

router.get("/counselor" , counselorControllers.becomeACounselor)



export default router