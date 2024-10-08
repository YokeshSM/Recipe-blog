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

AuthRouter.post("/signin", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({
          message: "Email and password are required",
        });
      }
  
      // Find the user by email
      const user = await UserModel.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      // Check if the provided password matches the stored password
      if (user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      // If credentials are valid, you can create a session or JWT here
      res.status(200).json({ message: "Sign in successful", user });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });

export default AuthRouter;
