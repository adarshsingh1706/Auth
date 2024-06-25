import dotenv from "dotenv"
dotenv.config({path:'./env'})
import express from "express"
import cors from "cors"
import userRoute from "./Routes/userRoute.js"
import connectDB from "./DB/db.js";
const app = express();
const PORT = process.env.PORT || 4000;

//midllewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use('/api',userRoute);


//connecting db
connectDB()
.then(()=>{
  app.listen(process.env.PORT||4000, ()=>{
    console.log(`Server Started at PORT ${process.env.PORT}`)
  })
})
.catch((error)=>{
  console.log("MongoDB connection failed", error);
})
