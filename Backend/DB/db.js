import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async ()=>{
  
  try {
    const connect = await mongoose.connect(`${process.env.MONGO_DB_URL}`)
    console.log("MongoDB Connected!!")
  } catch (error) {
    console.error("MONGODB CONNECTION ERROR: ", error);
    process.exit(1);
  }
}

export default connectDB;