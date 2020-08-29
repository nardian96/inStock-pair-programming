const fs = require("fs"); // file system module
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// json data to read and write
const warehouseFile = path.join(__dirname, "../data/warehouses.json");

// Warehouse Object Constructor

function Warehouse(
  name,
  address,
  city,
  country,
  contactName,
  contactPosition,
  contactPhone,
  contactEmail
) {
  this.id = uuidv4();
  this.name = name;
  this.address = address;
  this.city = city;
  this.country = country;
  this.contact = {
    name: contactName,
    position: contactPosition,
    phone: contactPhone,
    email: contactEmail,
  };
}

// function to load warehouse data
function warehouseList() {
  const data = fs.readFileSync(warehouseFile);
  return JSON.parse(data);
}
// delete warehouse by id
function removeWarehouse(id) {
  const warehouseArray = warehouselist();
  const warehouseIndex = warehouseArray.findIndex(
    (warehouse) => warehouse.id === id
  );
  warehouseArray.splice(warehouseIndex, 1);
  fs.writeFileSync(warehouseFile, JSON.stringify(warehouseArray));
  return warehouseArray;
}
function getByID(id) {
  const warehouseArray = fullList();
  return warehouseArray.filter((warehouse) => warehouse.id === id).shift();
}

// update warehouse by id
function updateWarehouse(id, data) {
  const updatedWarehouse = {
    name: data.name,
    address: data.address,
    city: data.city,
    country: data.country,
    contact: {
      name: data.contactName,
      position: data.contactPosition,
      phone: data.contactPhone,
      email: data.contactEmail,
    },
  };
  const warehouseArray = warehouselist();
  const warehouseIndex = warehouseArray.findIndex((video) => video.id === id);
  warehouseArray.splice(warehouseIndex, 1, updatedWarehouse);
  fs.writeFileSync(warehouseFile, JSON.stringify(warehouseArray));
  return warehouseArray;
}

//export multiple functions
module.exports = { warehouseList, removeWarehouse, updateWarehouse, getByID };
