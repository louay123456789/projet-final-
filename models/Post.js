const mongoose=require("mongoose")
const schema=mongoose.Schema

const PostSchema=new schema({
    image:{
        type:String
    },
    description:{
        type:String
    },
    evenement:{
        type:String,

    }

})

module.exports=Post=mongoose.model("Post",PostSchema)