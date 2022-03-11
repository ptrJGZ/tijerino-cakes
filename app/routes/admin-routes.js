const router = require("express").Router();
const Product = require("../models/Product");

// get all products
router.get("/", (req, res) => {
  Product.findAll({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
});

router.post("/", (req, res) => {
  // validate request
  if (!req.body.name || !req.body.price || !req.body.description) {
    res.status(404).json({ message: "Content cannot be empty!" });
    return;
  }

  // create a product
  Product.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

// update a product
router.put("/:id", (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

// delete a product
router.delete("/:id", (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
