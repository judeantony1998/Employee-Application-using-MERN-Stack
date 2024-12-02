import express from "express";
import cors from "cors";
import "dotenv/config";
import "./database/dbConnect.js";
import userRouter from "./routers/userRoutes.js";
import employeeRouter from "./routers/employeeRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/employee", employeeRouter);

app.listen(process.env.port || 3000, () => {
  console.log(`Server is connected on ${process.env.port}`);
});
