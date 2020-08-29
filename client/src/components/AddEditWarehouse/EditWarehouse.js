import React, { Component } from 'react'
import Axios from 'axios'
import backArrow from '../../assets/Icons/arrow_back-24px.svg'

export default class EditWarehouse extends Component {

    state = {
        name: "",
        address: "",
        city: "",
        country: "",
        contact: {
            name: "",
            position: "",
            phone: "",
            email: ""
        } 
    } 

    

    editWarehouse = (event) => {
        event.preventDefault()
        const id = this.props.match.params.warehouseId
        if(id !== undefined) {
            const { name, address, city, country, contactName, contactPosition, contactPhone, contactEmail } = event.target
            if (name.value !== "" || address.value !== "" || city.value !== "" || country.value !== "" 
            || contactName.value !== "" || contactPosition.value !== "" || contactPhone.value !== "" || contactEmail.value !== "") {
                Axios.put(`http://localhost:8080/warehouse/${id}/edit`, {
                    id: id,
                    name: name.value,
                    address: address.value,
                    city: city.value,
                    country: country.value,
                    contact: {
                        name: contactName.value,
                        position: contactPosition.value,
                        phone: contactPhone.value,
                        email: contactEmail.value
                    }  
                })
                .then((response) => {
                    // console.log(response)
                    this.form.reset();
                })
            }
        }
    }    

    render() {
        let selectedWarehouse = this.props.warehouses.filter( a => a.id === this.props.match.params.warehouseId)[0]
        if(!selectedWarehouse) {
            selectedWarehouse = {contact: {}}  
        } 

        return(
            <div>
                <div className="warehouse-header">
                    <div className="warehouse-header__header-left">
                        <h1 className="warehouse-header__warehouse-name">
                        <img
                            src={backArrow}
                            className="warehouse-header__backArrow"
                            alt="back arrow"
                        />
                        EDIT WAREHOUSE
                        </h1>
                    </div>
                </div>
                <form ref={form => this.form = form} onSubmit={this.editWarehouse}>
                    <section>
                        <h2>Warehouse Details</h2>
                        <div>
                            <h3>Warehouse Name</h3>
                            <textarea name="name" defaultValue={selectedWarehouse.name}></textarea>
                        </div>
                        <div>
                            <h3>Street Address</h3>
                            <textarea name="address" defaultValue={selectedWarehouse.address}></textarea>
                        </div>
                        <div>
                            <h3>City</h3>
                            <textarea name="city" defaultValue={selectedWarehouse.city}></textarea>
                        </div>
                        <div>
                            <h3>Country</h3>
                            <textarea name="country" defaultValue={selectedWarehouse.country}></textarea>
                        </div>
                    </section>
                    <section>
                        <h2>Contact Details</h2>
                        <div>
                            <h3>Contact Name</h3>
                            <textarea name="contactName" defaultValue={selectedWarehouse.contact.name}></textarea>
                        </div>
                        <div>
                            <h3>Position</h3>
                            <textarea name="contactPosition" defaultValue={selectedWarehouse.contact.position}></textarea>
                        </div>
                        <div>
                            <h3>Phone Number</h3>
                            <textarea name="contactPhone" defaultValue={selectedWarehouse.contact.phone}></textarea>
                        </div>
                        <div>
                            <h3>Email</h3>
                            <textarea name="contactEmail" defaultValue={selectedWarehouse.contact.email}></textarea>
                        </div>
                    </section>
                    <div>
                        <button>Cancel</button>
                        <button>Save</button>
                    </div>
                </form>    
            </div>    
        )
    }
}