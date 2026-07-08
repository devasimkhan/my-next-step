import mongoose from "mongoose";


const careerSchema = new mongoose.Schema({

category :{
   type : mongoose.Schema.ObjectId ,
   ref : "Category" ,
   required : true
} ,
title :{
     type :String ,
     required : [true , "Please Enter Title"]
} ,
description :{
    type : true ,
    required : [true , "Please Enter Description"] 
} ,
requiredQualification :{
 type : true ,
    required : [true , "Please Enter Required Qualification"] 


} ,
duration :{
     type : true ,
    required : [true , "Please Enter Description"] 
} ,
salary :{
     type : true ,
    required : [true , "Please Enter Description"] 
}
 
},
{
    timestamps:true
})

const Career = mongoose.model("Career" , careerSchema)

export default Career
