const express = require("express");

const app = express();
const path = require("path");
app.set("src", path.join(__dirname, "src"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080);
