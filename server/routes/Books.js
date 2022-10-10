const express = require("express");
const router = express.Router();
const { Books } = require("../models");

router.get("/", (req, res, next) => {
  Books.findAll()
    .then(books => res.status(200).json(books))
    .catch(next);
});

router.post("/", (req, res, next) => {
  const book = req.body;
  Books.create(book)
    .then(book => res.status(201).json(book))
    .catch(next);
});

module.exports = router;
