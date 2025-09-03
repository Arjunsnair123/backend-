import dotenv from "dotenv";
import mongoose, { connect } from "mongoose";
import { Db_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})
connectDB();



















// ( async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${Db_NAME}`)

//     }
//     catch(error)
//     {
//         console.error("error:", error)
//     }
// })()