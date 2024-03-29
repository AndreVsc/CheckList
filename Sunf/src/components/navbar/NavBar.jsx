import './NavBar.css';
import React from 'react';
import { FaTrash, FaShare } from "react-icons/fa";
import SunfIcon from '../../assets/SunfIcon.svg';

export default function NavBar() {
  return (
    <nav className='Navbar-container'>
      <ul className='Navbar-ul'>
        <li>
          <button className='circle-button'>
            <img src={SunfIcon} alt="" />
          </button>
        </li>
      </ul>
      <ul className='Navbar-ul'>
        <li>
          <button className='circle-button'><FaTrash/></button>
        </li>
        <li>
          <button className='circle-button'><FaShare/></button>
        </li>
      </ul>
    </nav>
  );
}
