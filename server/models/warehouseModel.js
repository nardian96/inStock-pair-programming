const fs = require("fs"); // file system module
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// json data to read and write
const warehouseFile = path.join(__dirname, "../data/warehouseInventory.json");

// Video Object Constructor
function Warehouse(
  name,
  streetAddress,
  city,
  country,
  contactName,
  contactPosistion,
  contactPhone,
  contactEmail
) {
  this.id = uuidv4();
  this.name = name;
  this.streetAddress = streetAddress;
  this.city = city;
  this.country = country;
  this.contactName = contactName;
  this.contactPosistion = contactPosistion;
  this.contactPhone = contactPhone;
  this.contactEmail = contactEmail;
  this.inventory = [];
}
