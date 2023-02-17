const express = require("express");

const app = express();

const data = {
  one: 0,
  two: 0,
  three: 0,
  four: 0,
};

app.get("/all", (req, res) => {
  res.json(data);
});
app.get("/:id", (req, res) => {
  res.send(data[req.params.id] ? "1" : "0");
});
app.post("/:id", (req, res) => {
  const id = req.params.id;
  data[id] = data[id] === 1 ? 0 : 1;
  res.send(data[id] ? "1" : "0");
});

app.listen(5000, () => {
  console.log("Hello from 5000");
});
