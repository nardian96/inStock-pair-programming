import React from 'react';
import logo from '../assets/Logo/logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='instock logo' />
      <div className='button__container'>
        <button className='button__warehouses'>Warehouses</button>
        <button className='button__inventory'>Inventory</button>
      </div>
    </header>
  );
};

export default Header;
