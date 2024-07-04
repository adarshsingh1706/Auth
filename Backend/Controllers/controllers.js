import dotenv from "dotenv"
dotenv.config({path:'./.env'})
import cookieParser from "cookie-parser"
import express from "express"
import User from "../Models/user.model.js" //import model
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
const app = express();
app.use(cookieParser());

//while signup creating user


const createUser = async (req,res) =>{
  const {name,email,password} = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully. Please login.',redirectTo: '/login' });
  } catch (error) {
    res.status(500).json({message:"Error creating user",error})
  }
}

//while logging in
const secretKey = process.env.SECRET_KEY;


const loginUser = async(req,res)=>{
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User does not exist. Please sign up.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password. Please try again.' });
    }
    //generating jwt
    const token = jwt.sign({ userId: user._id.toString(), email: user.email }, secretKey);
     
     // Set the token in a cookie
     res.cookie('token', token, { httpOnly: true });
      // Respond with a success message
    res.status(200).json({ message: 'Logged in successfully.' });


  } catch (error) {
    console.error('Error logging in:', error); // Log the error for debugging
    res.status(500).json({ message: 'Error logging in', error:error.message });
  }
}

export { createUser, loginUser };