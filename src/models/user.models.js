import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required:true,
        trim:true,
    },
    username:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        lowercase:true,
        index:true,
    },
     password:{
        type:String,
        required:[true,"Password is required"],
        
    },
     email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        lowercase:true,
        
    },
     fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
        
    },
     avatar:{
        type:String,//cloudinary url
        required:true
    },
     coverimage:{
        type:String//url
    },
     watchhistory:[
        {type:mongoose.Schema.Types.ObjectId,ref:"Video"}
     ],
     refreshToken:{
        type:String
     },
     createdAt:{
        type:Date,
     },
     updatedAt:{
        type:Date,
     }


},{timestamps:true})

userSchema.pre("save",async function(next){
   if(this.isModified("password")){
        this.password =bcrypt.hash(this.password,10)
        next()
}

})
userSchema.methods.isPasswordCorrect=async function(password){
   return await bcrypt.compare(password,this.password)//returns boolean
}
userSchema.methods.generateAccessToken=function(){
  return jwt.sign(
   {
      id:this.id,
      username:this.username,
      email:this.email,
      fullname:this.fullname
  },process.env.ACCESS_TOKEN_SECRET,
  {
      expiresIn:process.env.ACCESS_TOKEN_EXPIRIY
  }
  )
  
}
userSchema.methods.generateRefreshToken=function(){
     return jwt.sign(
   {
      id:this.id,
    
  },process.env.REFRESH_TOKEN_SECRET,
  {
      expiresIn:process.env.REFRESH_TOKEN_EXPIRIY
  }
  )
}

export const User=mongoose.model("User",userSchema)