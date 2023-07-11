const express = require("express");
const router = express.Router();
const productController = require("../controller/products");
router.get("/product", productController.getProducts);

module.exports = router;
