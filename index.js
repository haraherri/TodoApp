const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const connectMongodb = require("./init/mongodb");
const todoRoute = require("./routes/todo");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 8888;

connectMongodb();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", todoRoute);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
