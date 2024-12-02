import express from "express";
import employeeModel from "../models/employeeModel.js";
import jwt from "jsonwebtoken";

const employeeRouter = express.Router();
employeeRouter.use(express.json());

function verifyToken(req, res, next) {
  let token = req.headers.token;
  try {
    if (!token) throw "Unauthorized access";
    let payload = jwt.verify(token, process.env.jwt);
    if (!payload) throw "Unauthorized access";
    next();
  } catch (error) {
    console.log(error);
  }
}

employeeRouter.get("/", async (req, res) => {
  try {
    var data = await employeeModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.send("Unable to find Data");
  }
});

employeeRouter.post("/add", verifyToken, async (req, res) => {
  try {
    var item = req.body;
    var data = await employeeModel(item).save();
    res.status(200).send({ message: "Data added" });
  } catch (error) {
    res.send("Could not add data");
  }
});

employeeRouter.delete("/delete/:id", verifyToken, async (req, res) => {
  try {
    await employeeModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Data deleted");
  } catch (error) {
    res.send("Could not delete data");
  }
});

employeeRouter.put("/edit/:id", verifyToken, async (req, res) => {
  try {
    await employeeModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send("Data updated successfully");
  } catch (error) {
    res.send(error);
  }
});

export default employeeRouter;