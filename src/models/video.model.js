import mongoose from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

const videoSchema = new mongoose.Schema({
     id:{
        type:String,
        unique:true,
        required:true,
        trim:true,
    },
    videofile:{
        type:String,//cloudinary url
        required:true
    },
    thumbnail:{
        type:String,//cloudinary url
        required:true
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    time:{
        type:Number,
        required
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:false
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
     createdAt:{
        type:Date,
     },
     updatedAt:{
        type:Date,
     }
 

},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video",videoSchema)