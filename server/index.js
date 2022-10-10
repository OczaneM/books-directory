const express = require("express");

app = express();
app.use(express.json());

const db = require("./models");

app.get("/", (req, res) => {
  res.send("Homepage");
});

// Routers
const booksRouter = require("./routes/Books");
app.use("/books", booksRouter);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});
