const fs = require("fs"); // file system module
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// json data to read and write
const warehouseFile = path.join(__dirname, "../data/warehouseInventory.json");

// Warehouse Object Constructor
function Warehouse(name, address, city, country, contact) {
  this.id = uuidv4();
  this.name = name;
  this.streetAddress = address;
  this.city = city;
  this.country = country;
  this.contact = contact;
}
