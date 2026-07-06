import User from "../models/userModels.js";

const registerUser = async (req, res) => {
  const { name, email, phone, password, qualification, location } = req.body;

  if (!name || !email || !phone || !password || !qualification || !location) {
    res.status(409);
    throw new Error("Please Enter All Details....");
  }

  if (phone.length !== 10) {
    res.status(409);
    throw new Error("Please Enter Valid Number");
  }

  let emailExit = await User.findOne({ email: email });
  let phoneExit = await User.findOne({ phone: phone });

  if (emailExit || phoneExit) {
    res.status(409);
    throw new Error("User All Ready Register");
  }

  const user = await User.create({
    name , email , phone , password , qualification , location , 
  })
  if(!user){
    res.status(409)
    throw new Error("User Is Not Created..");
    
  }
  res.status(201).json(user)

};
const loginUser = async (req, res) => {

const user = await User.findOne({})

};

const authControllers = {
  registerUser,
  loginUser
};

export default authControllers;
