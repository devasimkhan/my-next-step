import express from "express"
import dotenv from "dotenv"
dotenv.config()
import colors from "colors"
import connectDB from "./config/dbConfig.js"
import authRoutes from "./routes/authRoutes.js"



const PORT = process.env.PORT || 3000

const app = express()
connectDB()

app.use(express.json())
app.use(express.urlencoded())


app.get("/" , (req , res) => {
    res.status(200).json({
        message : "WELCOME TO NEXT-STEP API's "
    })
})
app.use("/api/auth" , authRoutes)

app.listen(PORT , () => console.log(`SERVER RUNNING AT PORT ,${PORT}`.bgBlue) )





