import express from "express"
import { createUser, loginUser } from "../Controllers/controllers.js";

const router = express.Router();

router.post('/signup',createUser);
router.post('/login',loginUser)

export default router;