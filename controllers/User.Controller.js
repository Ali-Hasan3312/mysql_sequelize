import { where } from 'sequelize';
import {User} from '../models/User.Model.js'

export const createUser = async(req,res)=>{
  const  data = req.body;
    console.log(data);
  try {
     const user = await User.create(data)
     res.status(200).json({
        success: true,
        message: "User Created Successfully",
        user
     })
  } catch (error) {
    throw new Error("Something went wrong",error)
  }
   
    
}
export const findUser = async(req,res)=>{
    const { id } = req.params;
    console.log(id);
    
    const user = await User.findOne({ where: { id }})
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User not found"

        })
    }
    res.status(200).json({
        success: true,
        message: `${user.name} found successfully`,
        user
    })

}

export const updateUser = async(req,res)=>{
    const { id } = req.params;
    const { name } = req.body
    console.log(id);
    console.log(name);
    const user = await User.findOne({ where: { id }})
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User not found"

        })
    }

    user.name = name;
    user.save()
    res.status(200).json({
        success: true,
        message: "User Updated Successfully",
        user
    })
//    await user.update(
//         {
//             name
//         },
//         {
//             where: { name: user.name }
//         }
//     ).then((res)=>{
//         user.save()
//         res.status(200).json({
//             success: true,
//             message: "User Updated Successfully",
//             res
//         })
//     }).catch(err =>{
//         return res.status(500).json({
//             success: false,
//             message: "Somthing went wrong",
//             err
//         })
//     })

    
    
}