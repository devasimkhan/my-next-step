import Category from "../models/categoryModel.js";
import Counselor from "../models/counselorModel.js";

const becomeACounselor = async(req, res) => {

 let userId = req.user.id
 
    const { category ,  experience  }  = req.body 

  if(!category || !experience) {
    res.status(409)
    throw new Error("Please Enter All Details.. ");
  }


  let categoryExit = await Category.findById(category)
   
  if(!category){
    res.status(404)
    throw new Error("Category is Not Found");
    
  }



if(experience < 2){
res.status(409)
throw new Error("Experience Must be 2 OR 2+");

}

const counselor = await Counselor.create({
    user : userId ,
    category , 
    experience
})
if(!counselor){
    res.status(409)
    throw new Error("Counselor is not created...");
    
}
res.status(201).json({
    message : 'Counselor Request Raised wait For Admin Approval' ,
    counselor:counselor
})
 
}




const counselorControllers = {
    becomeACounselor
}

export default counselorControllers