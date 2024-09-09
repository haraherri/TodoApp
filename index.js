const express = require("express");
const mongoose = require("mongoose");
const PORT = 8000;
const app = express();

const connectionUrl = "mongodb://localhost:27017/todoDB";

mongoose
  .connect(connectionUrl)
  .then(() => console.log("Database Connection Succesfully!"))
  .catch((error) => console.log(error));

app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  try {
    res.render("index");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
