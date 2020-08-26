const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouseController"); // import controller

// warehouse routes
router.get("/", warehouseController.getWarehouse); //Function to be done
router.get("/:warehouseId", warehouseController.getWarehouseByID); //Function to be done

// export routes
module.exports = router;
