const express=require("express")
const app=express()
const connectDB=require("./config/connectDB")
const userroute=require("./routes/userRoutes")
const cors=require("cors")
const port=5001
app.use(cors({origin:'http://localhost:3000'}))

app.use(express.json())
connectDB()
app.use("/api/auth",userroute)
app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running on port ${port}`)
})