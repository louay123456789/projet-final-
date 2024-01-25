const express=require("express")
const app=express()
const connectDB=require("./config/connectDB")
const userroute=require("./routes/userRoutes")
const postroute=require("./routes/postRoutes")
const cors=require("cors")
const port=5001
const path=require("path")
app.use(cors({origin:'http://localhost:3000'}))

app.use(express.json())
connectDB()
app.use("/api/uploads", require("./routes/uploadRoute"));

app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
app.use("/api/auth",userroute)
app.use("/api/post",postroute)

app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running on port ${port}`)
})