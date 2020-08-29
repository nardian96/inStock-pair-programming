const fs = require("fs"); // file system module
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// json data to read and write
const warehouseFile = path.join(__dirname, "../data/warehouses.json");

// Warehouse Object Constructor
function Warehouse(name, address, city, country, contact) {
  this.id = uuidv4();
  this.name = name;
  this.address = address;
  this.city = city;
  this.country = country;
  this.contact = contact;
}

const list = JSON.parse(fs.readFileSync('./data/warehouses.json'))

// function to load warehouse data
function warehouseList() {
  const data = fs.readFileSync(warehouseFile)
  return JSON.parse(data)
}

//function to post warehouse data
function addWarehouse(data) {
  const warehouseArray = list;
  const newWarehouse = new Warehouse(data.name, data.address, data.city, data.country, data.contact)
  pushNewWarehouse = (newWarehouse) => {
    return {
      id: newWarehouse.id,
      name: newWarehouse.name,
      address: newWarehouse.address,
      city: newWarehouse.city,
      country: newWarehouse.country,
      contact: newWarehouse.contact
    }
  }
  warehouseArray.push(pushNewWarehouse(newWarehouse));
  fs.writeFileSync(warehouseFile, JSON.stringify(warehouseArray));
  return warehouseArray;
}

function findWarehouse(id) {
  return list.filter((warehouse) => {
      return id === warehouse.id
  })
}

// update warehouse by id
function updateWarehouse(id, data) {
  const updatedWarehouse = {
    id: id,
    name: data.name,
    address: data.address,
    city: data.city,
    country: data.country,
    contact: data.contact,
  };
  // const updatedWarehouse = {
  //   name: data.name,
  //   address: data.address,
  //   city: data.city,
  //   country: data.country,
  //   contact: {
  //     name: data.contactName,
  //     position: data.contactPosition,
  //     phone: data.contactPhone,
  //     email: data.contactEmail,
  //   },
  // };
  console.log(id)
  const warehouseArray = warehouseList();
  const warehouseIndex = warehouseArray.findIndex((selectedWarehouse) => selectedWarehouse.id === id);
  // const warehouseIndex = warehouseArray.findIndex((selectedWarehouse) => warehouseID[0].id === selectedWarehouse.id);
  console.log(warehouseIndex)
  warehouseArray.splice(warehouseIndex, 1, updatedWarehouse);
  fs.writeFileSync(warehouseFile, JSON.stringify(warehouseArray));
  return warehouseArray;
}


//export multiple functions
module.exports = { addWarehouse, warehouseList, updateWarehouse, findWarehouse }
