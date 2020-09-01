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

const list = JSON.parse(fs.readFileSync("./data/warehouses.json"));

// function to load warehouse data
function warehouseList() {
  const data = fs.readFileSync(warehouseFile);
  return JSON.parse(data);
}

//function to post warehouse data
function addWarehouse(data) {
  const warehouseArray = list;
  const newWarehouse = new Warehouse(
    data.name,
    data.address,
    data.city,
    data.country,
    data.contact
  );
  pushNewWarehouse = (newWarehouse) => {
    return {
      id: newWarehouse.id,
      name: newWarehouse.name,
      address: newWarehouse.address,
      city: newWarehouse.city,
      country: newWarehouse.country,
      contact: newWarehouse.contact,
    };
  };
  warehouseArray.push(pushNewWarehouse(newWarehouse));
  fs.writeFileSync(warehouseFile, JSON.stringify(warehouseArray));
  return warehouseArray;
}
function getByID(id) {
  const array = warehouseList();
  return array.filter((item) => item.id === id).shift();
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
  console.log(id);
  const warehouseArray = warehouseList();
  const warehouseIndex = warehouseArray.findIndex(
    (selectedWarehouse) => selectedWarehouse.id === id
  );
  // const warehouseIndex = warehouseArray.findIndex((selectedWarehouse) => warehouseID[0].id === selectedWarehouse.id);
  console.log(warehouseIndex);
  warehouseArray.splice(warehouseIndex, 1, updatedWarehouse);
  fs.writeFileSync(warehouseFile, JSON.stringify(warehouseArray));
  return warehouseArray;
}
// function to load warehouse data
// function warehouseList(callback) {
//   const data = fs.readFileSync(warehouseFile);
//   return JSON.parse(data);
// }

// delete warehouse by id
function removeWarehouse(id) {
  const warehouseArr = warehouseList();
  const warehouseIndex = warehouseArr.findIndex(
    (warehouse) => warehouse.id === id
  );
  warehouseArr.splice(warehouseIndex, 1);
  fs.writeFileSync(warehouseFile, JSON.stringify(warehouseArr));
  return warehouseArr;
}

function sortWarehouse(property) {
  const warehouseArray = warehouseList();
  const sortedArray = warehouseArray.sort((a, b) => {
    let propA = "";
    let propB = "";
    if (property === "address") {
      propA = `${a.country} ${a.city} ${a.address}`.toUpperCase();
      propB = `${b.country} ${b.city} ${b.address}`.toUpperCase();
    } else if (property === "contactName") {
      propA = a.contact.name;
      propB = b.contact.name;
    } else if (property === "contactEmail") {
      propA = a.contact.email;
      propB = b.contact.email;
    } else {
      propA = a[property];
      propB = b[property];
    }

    let comparison = 0;
    if (propA > propB) {
      comparison = 1;
    } else if (propA < propB) {
      comparison = -1;
    }
    return comparison;
  });

  return sortedArray;
}

//export multiple functions
module.exports = {
  addWarehouse,
  warehouseList,
  removeWarehouse,
  updateWarehouse,
  getByID,
  sortWarehouse,
};
