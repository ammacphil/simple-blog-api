const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("connected to MONGO DB"))
  .catch((err) => console.log("Error Occured"));

const app = express();

//Port
app.listen("5000", () => {
  console.log("Server is active");
});
