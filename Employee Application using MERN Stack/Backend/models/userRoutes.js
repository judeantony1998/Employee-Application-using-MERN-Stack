import express from "express";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const userRouter = express.Router();
userRouter.use(express.json());

userRouter.post("/login", async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      res.send("User not found");
    } else {
      if (user.password == req.body.password) {
        const payload = { email: user.email, password: user.password };
        const token = jwt.sign(payload, process.env.jwt);
        res.status(200).send({ message: "Login successful", token:token });
      } else {
        res.status(400).send("Invalid credentials");
      }
    }
  } catch (error) {
    console.log(error);
  }
});

userRouter.post("/signup", async (req, res) => {
  try {
    const data = req.body;
    await userModel(data).save();
    res.status(200).send({ message: "Data added successfully" });
  } catch (error) {
    res.send(error);
  }
});

export default userRouter;
