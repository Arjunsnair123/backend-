import mongoose from "mongoose";
import {Db_NAME} from "../constants.js";


const connectDB=async()=>{
try{
    const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${Db_NAME}`)
    console.log("Database connected:", connectionInstance.connection.host)
}
catch(error)
{
    console.error("error:",error)
    process.exit(1);
}
}



export default connectDB;