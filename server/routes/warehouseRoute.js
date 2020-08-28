const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouseController"); // import controller

// warehouse routes
// router.get("/", warehouseController.warehouseList); //Function to be done
router.get("/", warehouseController.getWarehouse);
router.delete("/:warehouseId", warehouseController.deleteWarehouse);
router.put("/:warehouseId", warehouseController.editWarehouse);
router.get("/:warehouseId", warehouseController.getWarehouseByID); //Function to be done

// export routes
module.exports = router;
