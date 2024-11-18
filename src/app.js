import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"

const app = express();

// middlewares
app.use(express.json({limit:'20kb'}))
app.use(express.static("public"))
app.use(cookieParser())
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))
app.use(express.urlencoded(
    {extended: true, limit:"16kb"}
))

// route
import userRouter from "./routes/user.router.js"
// route declaration





app.use("/api/v1/users", userRouter)
// this make http://localhost:3000/api/v1/users/register








// console.log(app);
export default app