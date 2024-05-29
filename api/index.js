import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDB = process.env.MONGO_DB;
const port = process.env.PORT || 3000;

mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(port, () => {
  console.log("Server listening on port 3000!");
});