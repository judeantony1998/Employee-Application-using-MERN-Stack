import mongoose from "mongoose";
mongoose
  .connect(process.env.mongo_url)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((error) => {
    console.log(error);
  });
