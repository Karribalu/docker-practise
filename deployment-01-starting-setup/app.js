const path = require("path");

const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "views", "welcome.html");
  res.sendFile(filePath);
});

app.get("/error", (req, res) => {
  // should stop the entire server
  process.exit(1);
});

app.listen(80);
