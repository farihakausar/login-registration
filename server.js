const express=require("express");
const app=express();
const Db=require("./db")
const users=require("./router/register")


app.use(express.json())
// app.use("/api/rooms",rooms);
app.use("/api/users",users);
app.get("/",(req,res)=>{
res.send("gudhiahfic")
})
app.get("/homeit",(req,res)=>{
    res.send("hpmeit")
    console.log("hihdih")
    })

    app.listen(5000,()=>{
        console.log("serrver is lietniong to port 5000")
    })