import { v2 as cloudinary } from 'cloudinary'
import fs from "node:fs"
import dotenv from 'dotenv'
import { error } from 'node:console'
dotenv.config()


cloudinary.config({
  cloud_name :"hjs8nuxn" ,
    api_key : process.env.CLOUDINARY_API_KEY ,
    api_secret : process.env.CLOUDINARY_API_SECRET
})

 const uploadToCloudinary = async(fileLink)=>{

const uploadResult = await cloudinary.uploader.upload(
    fileLink , {
        resource_type : "auto"
    }
)
.catch((error)=> {
    console.log(error)

    fs.unlink(fileLink)
})

return uploadResult

 }  


 export default uploadToCloudinary