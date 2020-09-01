import React, { Component } from 'react'
import Axios from 'axios'
import backArrow from '../../assets/Icons/arrow_back-24px.svg'
import { Link } from 'react-router-dom'

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
                this.props.action();
                this.props.history.goBack();
            }) 
        }
    }

    render() {
        return(
            <div className="warehouse__list">
                <div className="warehouse__form-header">
                    <div>
                        <h1 className="warehouse__header-title">
                        <Link to='/warehouse'>
                            <img
                                src={backArrow}
                                className="warehouse-header__backArrow"
                                alt="back arrow"
                            />
                        </Link>

                        Add New Warehouse
                        </h1>
                    </div>
                </div>
                <form ref={form => this.form = form} className="warehouse__list-container" onSubmit={this.addNewWarehouse}>
                    <div className="warehouse__form-container">
                        <section className="warehouse__subsection warehouse__subsection--border">
                            <h2>Warehouse Details</h2>
                            <div className="warehouse__input-container">
                                <h3>Warehouse Name</h3>
                                <textarea name="name" className="warehouse__input-box" placeholder="Warehouse Name"></textarea>
                            </div>
                            <div className="warehouse__input-container">
                                <h3>Street Address</h3>
                                <textarea name="address" className="warehouse__input-box" placeholder="Street Address"></textarea>
                            </div>
                            <div className="warehouse__input-container">
                                <h3>City</h3>
                                <textarea name="city" className="warehouse__input-box" placeholder="City"></textarea>
                            </div>
                            <div className="warehouse__input-container">
                                <h3>Country</h3>
                                <textarea name="country" className="warehouse__input-box" placeholder="Country"></textarea>
                            </div>
                        </section>
                        <section className="warehouse__subsection">
                            <h2>Contact Details</h2>
                            <div className="warehouse__input-container">
                                <h3>Contact Name</h3>
                                <textarea name="contactName" className="warehouse__input-box" placeholder="Contact Name"></textarea>
                            </div>
                            <div className="warehouse__input-container">
                                <h3>Position</h3>
                                <textarea name="contactPosition" className="warehouse__input-box" placeholder="Position"></textarea>
                            </div>
                            <div className="warehouse__input-container">
                                <h3>Phone Number</h3>
                                <textarea name="contactPhone" className="warehouse__input-box" placeholder="Phone"></textarea>
                            </div>
                            <div className="warehouse__input-container">
                                <h3>Email</h3>
                                <textarea name="contactEmail" className="warehouse__input-box" placeholder="Email"></textarea>
                            </div>
                        </section>
                    </div>    
                    <div className="warehouse__button-container">
                        <Link to='/warehouse'>
                            <button className="warehouse__small-button">Cancel</button>
                        </Link>
                        <button className="warehouse__small-button warehouse__small-button--blue warehouse__small-button--add">+ Add Warehouse</button>
                    </div>
                </form>    
            </div>    
        )
    }
}