// server.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/ping", (req, res) => {
  console.log("ping route is called");

  res.json({ message: "pong" });
});
app.get("/", (req, res) => {
  console.log("root route is called");
  res.json({ message: "Hello World" });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
