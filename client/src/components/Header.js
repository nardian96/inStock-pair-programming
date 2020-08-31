import React from 'react';
import logo from '../assets/Logo/logo.svg';
import { Link } from 'react-router-dom'

const HeaderWarehouse = () => {
  return (
    <header className='header-container'>
      <img className='logo' src={logo} alt='instock logo' />
      <div className='button__container'>
      <button className='button__warehouses button__warehouses--active'>Warehouses</button>
        <Link to='/Inventories'>
          <button className='button__inventory button__inventory--not-active'>Inventory</button>
        </Link>
      </div>
    </header>
  );
};

export const HeaderInventory = () => {
  return (
    <header className='header-container'>
      <img className='logo' src={logo} alt='instock logo' />
      <div className='button__container'>
        <Link to='/warehouse'>
          <button className='button__warehouses button__warehouses--not-active'>Warehouses</button>
        </Link>
        <button className='button__inventory button__inventory--active'>Inventory</button>
      </div>
    </header>
  );
};

export default HeaderWarehouse;
