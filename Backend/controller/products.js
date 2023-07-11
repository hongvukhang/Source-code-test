const Product = require("../models/products/product");

exports.getProducts = (req, res) => {
  Product.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
};
