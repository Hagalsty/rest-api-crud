const express = require("express");
const ordersData = require("../data/orders-data");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(201).send({
    message: "Handling GET requests for /orders...",
    order: ordersData.transaction1,
  });
});

module.exports = router;
