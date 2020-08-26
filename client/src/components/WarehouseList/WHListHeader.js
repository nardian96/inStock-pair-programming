import React from 'react';
import searchIcon from '../../assets/Icons/search-24px.svg'

function WHListHeader() {
    return (
        <div>
            <h1>Warehouses</h1>
            <form>
                <label>
                    <img src={searchIcon} alt='search icon'/>
                </label>
                <input></input>
            </form>
            <button> + Add New Warehouse</button>
        </div>
    )
}

export default WHListHeader;