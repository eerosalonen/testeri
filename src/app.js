const express = require("express");

const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080);
