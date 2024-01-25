
const express=require("express")
const router=express.Router()
const Post=require("../models/Post")

//testt 
router.get("/",(req,res)=>{
    res.send("helloooooooo")
})

//add contaact
router.post("/add",async(req,res)=>{
    console.log(req.body,"hellooooo")
    const {image,description,evenement}=req.body
    
    const newpost=new Post({
        image,description,evenement
    })
   
  const post= await newpost.save()

  res.send({msg:"post added",post})
    

})

router.delete("/delete/:_id",async(req,res)=>{
    const {_id}=req.params
    const post= await Post.findOneAndDelete({_id})
    res.send({msg:"user deleted",post})
})

//edit contact

router.put("/edit/:_id",async(req,res)=>{
    const{_id}=req.params
    const Post=await Post.findByIdAndUpdate({_id},{$set:req.body},{new:true})
    res.send({msg:"Post edited",Post})
})
//fetch data
router.get("/getall",async(req,res)=>{
    const post=await Post.find()
    res.send({msg:"Post fetched",post})
   
})
module.exports=router
