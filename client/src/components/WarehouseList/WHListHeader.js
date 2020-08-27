import React from 'react';
import searchIcon from '../../assets/Icons/search-24px.svg'

function WHListHeader() {
    return (
        <div className="warehouse__list-header">
            <h1 className="header__title">Warehouses</h1>
            <form className="header__search-container">
                <label htmlFor="header__search" className="header__search-icon">
                    <img src={searchIcon} alt='search icon'/>
                </label>
                <input className="header__search" type="search" name="searchbar" placeholder="Search..."></input>
            </form>
            <button className="header__button"> + Add New Warehouse</button>
        </div>
    )
}

export default WHListHeader;