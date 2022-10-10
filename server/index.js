const express = require("express");

app = express();

const db = require("./models");

app.get("/", (req, res) => {
  res.send("Homepage");
});

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});
