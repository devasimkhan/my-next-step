import Category from "../models/categoryModel.js";
import User from "../models/userModels.js"


const getAllUser = async (req , res) => {
    
    const allUsers = await User.find()

    if(!allUsers){
        res.status(404)
        throw new Error("User is not Found");
        
    }

res.status(200).json(allUsers)

}

const createCategory = async(req, res) => {
    const {title} = req.body
    if(!title){
        res.status(409)
        throw new Error("Please Enter Category Title");
        
    }

    const category = await Category.create({title : title})
    
    if(!category){
        res.status(409)
        throw new Error("Category Not Created! ");
        
    }
    res.status(201).json(category)
}


const getAllCategory = async(req, res) => {

const allCategory = await Category.find()

if(!allCategory){
    res.status(404)
    throw new Error("Category is Not Found");
    
}
res.status(200).json(allCategory)



}


const adminControllers = {
    getAllUser ,
    createCategory ,
    getAllCategory
}

export default adminControllers