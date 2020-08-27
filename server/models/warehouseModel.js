const fs = require("fs"); // file system module
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// json data to read and write
const warehouseFile = path.join(__dirname, "../data/warehouses.json");


// Warehouse Object Constructor

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

// function Warehouse(name, address, city, country, contact, contactName, contactPosition, contactPhone, contactEmail) {
//   this.id = uuidv4();
//   this.name = name;
//   this.streetAddress = address;
//   this.city = city;
//   this.country = country;
//   this.contactName = contactName;
//   this.contactPosition = contactPosition;
//   this.contactPhone = contactPhone;
//   this.contactEmail = contactEmail;
//   this.inventory = [];
//   this.contact = contact;
// }

// function to load warehouse data
function warehouseList(callback) {
  const data = fs.readFileSync(warehouseFile)
  return JSON.parse(data)
  // fs.readFile(warehouseFile, (err, data) => {
  //   if (err) throw err;
  //   const warehouses = JSON.parse(data);
  //   callback(warehouses)
  // })
}

//export multiple functions
module.exports = { warehouseList }