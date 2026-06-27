import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/dbConfig.js"

dotenv.config()


const PORT = process.env.PORT || 3000

const app = express()
connectDB()



app.listen(PORT , () => console.log(`SERVER RUNNING AT PORT ,${PORT}`) )





