import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1>Math Magicians</h1>
    <ul className="nav_lists">
      <li className="nav_list">
        <Link className="link" to="/">Home</Link>
      </li>
      <li className="nav_list">
        <Link className="link" to="/calculator">Calculator</Link>
      </li>
      <li className="nav_list hidden">
        <Link className="link" to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
