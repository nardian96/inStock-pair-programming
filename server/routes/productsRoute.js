const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController"); // import controller

router.get("/", productsController.getProducts);

// export routes
module.exports = router;
