const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const faqSchema = new mongoose.Schema({
    
    query:{
        type:String,
        required:true
    },
    
    likes:[{type:ObjectId,ref:"User"}],
    comments:[{
        text:String,
        postedBy:{type:ObjectId,ref:"User"}
    }],
    postedBy:{
       type:ObjectId,
       ref:"User"
    }
},{timestamps:true})

mongoose.model("FAQ",faqSchema)