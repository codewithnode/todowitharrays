const express = require("express");
const router = express.Router();

let todo = ["one", "two", "three"];

router.get("/", (req, res, next) => {
  res.render("index", { todoarr: todo });
});

router.get("/delete/:_id", (req, res, next) => {
  const id = req.params._id;
  todo.splice(id, 1);
  res.redirect("/");
});
router.post("/addtodo", (req, res, next) => {
  const todoval = req.body.todoitem;
  todo.push(todoval);
  res.redirect("/");
});

module.exports = router;
