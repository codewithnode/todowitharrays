const express = require("express");
const app = express();

const todoroutes = require("./router/todoroutes");

app.use("/static", express.static("public"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(todoroutes);

app.listen(3000, () => {
  console.log("So this has to be the TODO app");
});
