const express = require("express");
const router = express.Router();
const {
  homeController,
  addTodoFormController,
  updateTodoFormController,
  deleteTodoPageController,
  addTodoController,
  updateTodoController,
  deleteTodoController,
} = require("../controllers/todo");

router.post("/add-todo", addTodoController);

router.get("/", homeController);

router.get("/add-todo", addTodoFormController);

router.get("/update-todo", updateTodoFormController);
router.get("/delete-todo", deleteTodoPageController);
router.post("/update-todo/:id", updateTodoController);
router.get("/confirm-delete", deleteTodoController);
module.exports = router;
