
const mongoose=require('mongoose');

const Db= "mongodb+srv://fariha:V1LuKMDWqIhIcpHd@cluster0.yv6yyhi.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(Db).then(()=>{
    console.log("connection succesful")
}).catch((err)=>{console.log("no connection")})

module.exports=mongoose;


// V1LuKMDWqIhIcpHd

// fariha