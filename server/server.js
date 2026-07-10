import express from "express"
import dotenv from "dotenv"
dotenv.config()
import colors from "colors"
import connectDB from "./config/dbConfig.js"
import authRoutes from "./routes/authRoutes.js"
import errorHandler from "./middleware/errorhandler.js"
import adminRoutes from "./routes/adminRoutes.js"
import counselorRoutes from "./routes/counselorRoutes.js"

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
// Auth Routes
app.use("/api/auth" , authRoutes)

// admin Routes
app.use("/api/admin" , adminRoutes)
//  Counselor Routes

app.use("/api" , counselorRoutes)


app.use(errorHandler)
app.listen(PORT , () => console.log(`SERVER RUNNING AT PORT ,${PORT}`.bgBlue) )





