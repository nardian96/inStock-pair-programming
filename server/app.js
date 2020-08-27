const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;
const warehouseRoute = require("./routes/warehouseRoute");
// const inventoriesRoute = require("./routes/inventoriesRoute");

// add middleware to help work with req.body
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// Warehouse, inventory endpoint, setup using express.Router()
app.use("/warehouse", warehouseRoute);
// app.use("/inventories", inventoriesRoute);

// listen, start the application
app.listen(PORT, () => console.log(`listening at: ${BACKEND_URL}:${PORT}`));
