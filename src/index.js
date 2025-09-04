import dotenv from "dotenv";
// import mongoose from "mongoose";
//used in first method
// import { Db_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import {app} from "./app.js";

dotenv.config({
    path: "./env"
})
connectDB().then(()=>{
    app.on("error",(err)=>{
        console.error("server error:",err)
        throw err;
    })

    app.listen(process.env.PORT || 8000,()=>{
        console.log("server is listening on port:",process.env.PORT || 8000)
    })
    
}).catch((err) => {
    console.error("Database connection error:", err);
});



















// ( async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${Db_NAME}`)

//     }
//     catch(error)
//     {
//         console.error("error:", error)
//     }
// })()