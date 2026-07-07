import User from "../models/userModels.js"


const getAllUser = async (req , res) => {
    
    const allUsers = await User.find()

    if(!allUsers){
        res.status(404)
        throw new Error("User is not Found");
        
    }

res.status(200).json(allUsers)

}



const adminControllers = {
    getAllUser
}

export default adminControllers