import express from "express";
import { UserModel } from "../model/UserModel.js";
const AuthRouter = express.Router();

AuthRouter.post("/signup", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    console.log(req.body);

    if (!username || !password || !email) {
      return res
        .status(400)
        .json({
          message: "All fields are required",
          body: { username, password, email },
        });
    }
    console.log(req.body);
    const newUser = new UserModel({ username, password, email });

    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default AuthRouter;
