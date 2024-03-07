import './NavBar.css';
import React, { useState } from 'react';
import { FaTrash, FaShare, FaPlus } from 'react-icons/fa';

export default function NavBar({ showAll}) {
  return (
    <nav className='Navbar-container'>
      <ul className='Navbar-ul'>
        <li>
          <button className='circle-button'><FaTrash /></button>
        </li>
        <li>
          <button className='circle-button'><FaShare /></button>
        </li>
        <button className='circle-button' onClick={showAll}><FaPlus /></button>
      </ul>
    </nav>
  );
}
