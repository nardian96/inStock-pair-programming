const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouseController"); // import controller

// warehouse routes
// router.get("/", warehouseController.warehouseList); //Function to be done
router.get("/", warehouseController.getWarehouse);
router.post("/", warehouseController.postWarehouse);
router.delete("/:warehouseId", warehouseController.deleteWarehouse);
router.put("/:warehouseId", warehouseController.editWarehouse);
<<<<<<< HEAD
router.get("/:warehouseId", warehouseController.getWarehouseByID);
router.get("/list/:warehouseId", warehouseController.getWarehouseInventory);
=======
// router.get("/:warehouseId", warehouseController.getWarehouseByID); //Function to be done
>>>>>>> master

// export routes
module.exports = router;
