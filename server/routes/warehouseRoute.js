const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouseController"); // import controller

// warehouse routes
// router.get("/", warehouseController.warehouseList); //Function to be done
router.get("/", warehouseController.getWarehouse);
// router.get("/:warehouseId", warehouseController.getWarehouseByID); //Function to be done
router.post("/", warehouseController.postWarehouse);

// export routes
module.exports = router;
