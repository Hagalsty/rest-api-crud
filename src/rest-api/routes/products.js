const express = require("express");
const productsData = require("../data/products-data");
const router = express.Router();

router
  .get("/", (req, res, next) => {
    res.status(201).send({
      message: "Handling GET requests for /products...",
      product: productsData.product1,
    });
  })
  .post("/", (req, res, next) => {
    res.status(201).send({
      message: "Handling POST requests for /products...",
      product: productsData.product2,
    });
  })
  .get("/:productID", (req, res, next) => {
    const id = req.params.productID;
    if (id === "UNIQUE_ID") {
      res.json({
        message: `We've got a ${id} id`,
      });
    } else if (id === productsData.product1.id) {
      res.json({
        message: `We've got a ${id} id`,
        product: productsData.product1,
      });
    } else {
      res.json({
        message: `We've got a PASSED id`,
      });
    }
  });

module.exports = router;
