import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async()=>{
    try{
        const mongoDataBase= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        // console
        // console.log(mongoDataBase);
        console.log("db server connect in :",mongoDataBase.connection.host);
    } catch(error){
        console.log("MongoDB connection ERROR :", error);
        process.exit(1)
    }
}

export default connectDB;