const express = require("express");
const mongoose = require("mongoose");
const PORT = 8000;
const app = express();
const path = require("path");
const connectionUrl = "mongodb://localhost:27017/todoDB";

mongoose
  .connect(connectionUrl)
  .then(() => console.log("Database Connection Succesfully!"))
  .catch((error) => console.log(error));

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: String,
  },
  { timestamps: true }
);

const Todo = mongoose.model("todo", todoSchema)
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  try {
    res.render("index", { title: "List todo" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/add-todo", (req, res, next) => {
  try {
    res.render("newTodo", { title: "New todo" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/update-todo", (req, res, next) => {
  try {
    res.render("updateTodo", { title: "Update todo" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/delete-todo", (req, res, next) => {
  try {
    res.render("deleteTodo", { title: "Delete todo" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
