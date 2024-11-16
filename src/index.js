// require('dotenv').config({path:"./env"})
import dotenv from "dotenv"
dotenv.config({
    path: "./env"
})
import connectDB from "./db/index.js";



connectDB();




































/**
 * this is basic approse
// use this semi for ignore error from previous line path
;(async ()=>{
    try {
        // connect to the data base
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // check is express is ok with server
        app.on("error", (error)=>{
            console.log("Express Error :", error);
            throw error
        })

        // connect server in port
        // const port= process.env.PORT;
        app.listen(process.env.PORT,()=>{
            console.log(`App is open in : ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Database Not Connect: ",error);
        throw err 
    }
})()
 */