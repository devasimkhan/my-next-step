import express from "express"
import protect from "../middleware/authMiddleware.js"
import { generateRoadmap } from "../controllers/roadmapControllers.js"

const router = express.Router()

router.post("/roadmap" ,protect.forUser , generateRoadmap)

export default router


