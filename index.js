const express = require("express");

const app = express();

app.get("/teste2", (req, res) => {
  return res.json({ message: "Hello 2" });
});

app.listen(3333);
