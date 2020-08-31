const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoriesController"); // import controller

// warehouse routes
router.get("/", inventoryController.getInventories); //Function to be done
router.get("/:inventoryId", inventoryController.getInventoryByID);
router.delete("/:inventoryId", inventoryController.removeInventoryByID);
router.delete(
  "/warehouse/:warehouseId",
  inventoryController.removeInventoryByWarehouse
);
//router.get("/:warehouseId/:itemName", inventoryController.getInventoryByID); //Function to be done
router.post("/", inventoryController.addInventory);
router.put("/:inventoryId", inventoryController.updateInventory);

// export routes
module.exports = router;
