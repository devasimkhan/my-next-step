import Career from "../models/careerModel.js";
import Category from "../models/categoryModel.js";
import User from "../models/userModels.js";

const getAllUser = async (req, res) => {
  const allUsers = await User.find();

  if (!allUsers) {
    res.status(404);
    throw new Error("User is not Found");
  }

  res.status(200).json(allUsers);
};

const createCategory = async (req, res) => {
  const { title } = req.body;
  if (!title) {
    res.status(409);
    throw new Error("Please Enter Category Title");
  }

  const category = await Category.create({ title: title });

  if (!category) {
    res.status(409);
    throw new Error("Category Not Created! ");
  }
  res.status(201).json(category);
};

const getAllCategory = async (req, res) => {
  const allCategory = await Category.find();

  if (!allCategory) {
    res.status(404);
    throw new Error("Category is Not Found");
  }
  res.status(200).json(allCategory);
};



const createCareer = async (req, res) => {

    const {title , description , requiredQualification , duration , salary} = req.body

    if(!title || !description || !requiredQualification || !duration  || !salary){
        res.status(409)
        throw new Error("Please Enter All Details!");
        
    }
      const categoryId = req.params.cid 

    
    const career = await Career.create({
         category : categoryId    ,
        title ,
        description ,
        requiredQualification ,
        salary ,
        duration ,
    })
    if(!career){
        res.status(409)
        throw new Error("Career Not Create")
    }

    res.status(201).json(career)


}

const getAllCareer = async(req , res) => {

  const allCareers = await Career.find().populate('category')
  if(!allCareers){
    res.status(404)
    throw new Error("Career Not Found");
    
  }
  res.status(200).json(allCareers)

}

const getCareerByCategoryId = async(req , res) => {

  const { cid } = req.params;

    const careers = await Career.find({
      category: cid,
    })

    if (careers.length === 0) {
      res.status(404);
      throw new Error("No Career Found");
    }

    res.status(200).json(careers);
}



const adminControllers = {
  getAllUser,
  createCategory,
  getAllCategory,
  createCareer ,
  getAllCareer ,
 getCareerByCategoryId

};

export default adminControllers;
