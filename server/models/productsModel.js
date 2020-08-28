const fs = require("fs"); // file system module
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// json data to read and write
const productsFile = path.join(__dirname, "../data/products.json");

function productsList(callback) {
  const data = fs.readFileSync(productsFile);
  return JSON.parse(data);
  // fs.readFile(warehouseFile, (err, data) => {
  //   if (err) throw err;
  //   const warehouses = JSON.parse(data);
  //   callback(warehouses)
  // })
}

module.exports = { productsList };
