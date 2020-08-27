const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoriesController"); // import controller

// warehouse routes
router.get("/", inventoryController.getInventories); //Function to be done
// router.get("/:warehouseId/:itemName", inventoryController.getInventoryByID); //Function to be done

// export routes
module.exports = router;
