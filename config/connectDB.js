const mongoose=require("mongoose")

connectDB=()=>{
    mongoose.connect("mongodb+srv://mo:Tunistunis@cluster0.xazlrjz.mongodb.net/auth")
    .then(()=>console.log("mongoDB connected ..."))
    .catch((err)=>console.log(err))
}

module.exports=connectDB