import mongoose from "mongoose";

const counselorSchema = new mongoose.Schema({

category :{
type : mongoose.Schema.Types.ObjectId ,
ref :"Category" , 
  required : true 
} ,
user :{
    type : mongoose.Schema.Types.ObjectId ,
    ref :"User" ,
      required : true 
} ,
experience :{
    type : Number ,
    required : true 
} ,
isActive :{
    type : Boolean ,
  default : false  ,
    required : true 
} ,
isAvailable :{
    type : Boolean ,
    default : true ,
    required : true 
}

},{
   timestamps:true
})


const Counselor = mongoose.model("Counselor" , counselorSchema)

export  default Counselor