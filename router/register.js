const express=require("express");

const router=express.Router();

const User= require("../models/login")

const bcrypt=require("bcrypt")
router.post("/register",async(req,res)=>{
    const newUser=new User(req.body);

try{
//     const userExist=await User.find({email:email})
//     if(userExist){
//         return res.status(422).json({error:"email aldready exist"})
//     }
//     else if(password!==cpassword){
// return res.status(422).json({error:"password are not macthuing"})
//     }
//     else{
//         const newUser=new User(req.body);
// //ysaha per
//         await newUser.save();
//     }
   // ysaha per
    const user=await newUser.save();

    res.send("user sigin successfully")
}catch(error){
return res.status(400).json({error})
}
})
   


router.post("/login",async(req,res)=>{
  try{
    const {email,password}=req.body;
        if(!email||!password){
            return res.json({error:"plx fill the data"}) }
      const user=await User.findOne({email:email})
     
        if(user){
const isMatch=await bcrypt.compare(password,user.password)
const temp={
    name:user.name,
   email:user.email,
   isAdmin:user.isAdmin,
    _id:user._id
}
if(temp){
    res.send(temp)
    }
    const token =await user.generateAuthToken();
            console.log(token)
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+4567890),
                httpOnly:true
            })
            if(!isMatch){
                return res.json({error:"invalid credeintals"})
            }else{
                return res.json({messege:"sigin successfully"})
            } }
        else{
            return res.json({error:"invalid credeintals"}) }
        console.log(user)
        
           
    }catch(error){
    return res.status(400).json({error})
    }
})
    

    module.exports = router;


    
            
           
       
      