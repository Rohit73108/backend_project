import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))// .use is used generally for the middleware

app.use(express.json({
    limit: "16kb"
}))
app.use(express.urlencoded({
    extended: true,
    limit:"16kb"
}))
app.use(express.static("public"))

// set the cookies

app.use(cookieParser())



// routes import usually import like this in between of the code file

import userRouter from "./routes/user.routes.js";

// routes declaration 
app.use("/api/v1/users",userRouter)


// http://localhost8000/api/v1/users/register/login    this type of router url will be build



export{app};