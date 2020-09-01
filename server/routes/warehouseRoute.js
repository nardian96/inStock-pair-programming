const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouseController"); // import controller

// warehouse routes
// router.get("/", warehouseController.warehouseList); //Function to be done
router.get("/", warehouseController.getWarehouse);
router.get("/sort/:property", warehouseController.sortWarehouse);
router.post("/", warehouseController.postWarehouse);
router.delete("/:warehouseId", warehouseController.deleteWarehouse);
router.put("/:warehouseId/edit", warehouseController.editWarehouse);
// router.get("/:warehouseId", warehouseController.getWarehouseByID); //Function to be done
router.get("/:warehouseId", warehouseController.getWarehouseByID);
router.get("/list/:warehouseId", warehouseController.getWarehouseInventory);
// export routes
module.exports = router;
