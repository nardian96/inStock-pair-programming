import React, { Component } from 'react'
import Axios from 'axios'
import backArrow from '../../../assets/Icons/arrow_back-24px.svg'

export default class AddWarehouse extends Component {

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

    addNewWarehouse = (event) => {
        event.preventDefault()
        const { name, address, city, country, contactName, contactPosition, contactPhone, contactEmail } = event.target
        if (name.value !== "" || address.value !== "" || city.value !== "" || country.value !== "" 
        || contactName.value !== "" || contactPosition.value !== "" || contactPhone.value !== "" || contactEmail.value !== "") {
            Axios.post('http://localhost:8080/Warehouse', {
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
                console.log(response)
                this.form.reset();
            }) 
        }
    }

    render() {
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
                        ADD WAREHOUSE
                        </h1>
                    </div>
                </div>
                <form ref={form => this.form = form} onSubmit={this.addNewWarehouse}>
                    <section>
                        <h2>Warehouse Details</h2>
                        <div>
                            <h3>Warehouse Name</h3>
                            <textarea name="name" placeholder="Warehouse Name"></textarea>
                        </div>
                        <div>
                            <h3>Street Address</h3>
                            <textarea name="address" placeholder="Street Address"></textarea>
                        </div>
                        <div>
                            <h3>City</h3>
                            <textarea name="city" placeholder="City"></textarea>
                        </div>
                        <div>
                            <h3>Country</h3>
                            <textarea name="country" placeholder="Country"></textarea>
                        </div>
                    </section>
                    <section>
                        <h2>Contact Details</h2>
                        <div>
                            <h3>Contact Name</h3>
                            <textarea name="contactName" placeholder="Contact Name"></textarea>
                        </div>
                        <div>
                            <h3>Position</h3>
                            <textarea name="contactPosition" placeholder="Position"></textarea>
                        </div>
                        <div>
                            <h3>Phone Number</h3>
                            <textarea name="contactPhone" placeholder="Phone"></textarea>
                        </div>
                        <div>
                            <h3>Email</h3>
                            <textarea name="contactEmail" placeholder="Email"></textarea>
                        </div>
                    </section>
                    <div>
                        <button>Cancel</button>
                        <button>+ Add Warehouse</button>
                    </div>
                </form>    
            </div>    
        )
    }
}