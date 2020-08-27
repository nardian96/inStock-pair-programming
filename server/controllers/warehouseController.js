// load models
const warehouse = require("../models/warehouseModel");

//get list of warehouses
function getWarehouse (req, res) {
    res.json(warehouse.warehouseList())
    // warehouse.loadWarehouseData((warehouses) => {
        // const warehouseList = warehouses.map((warehouseItem) => {
        //     return {
        //         id: warehouseItem.id, 
        //         name: warehouseItem.name,
        //         address: warehouseItem.address, 
        //         city: warehouseItem.city, 
        //         country: warehouseItem.country,
        //         contactName: warehouseItem.contact.name,
        //         contactPhone: warehouseItem.contact.phone,
        //         contactEmail: warehouseItem.contact.email,
        //     }
        // })
    // res.json(warehouseList);    
    // })
}


// export functions
module.exports = { getWarehouse };
