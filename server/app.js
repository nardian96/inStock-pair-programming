const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;

const inventoriesRoute = require("./routes/inventoriesRoute");
const warehouseRoute = require("./routes/warehouseRoute");

// add middleware to help work with req.body
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// Warehouse, inventory endpoint, setup using express.Router()
app.use("/inventories", inventoriesRoute);
app.use("/warehouse", warehouseRoute);

// listen, start the application
app.listen(PORT, () => console.log(`listening at: ${BACKEND_URL}:${PORT}`));
