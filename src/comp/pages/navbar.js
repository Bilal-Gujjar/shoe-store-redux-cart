import {Link } from "react-router-dom";
// import Home from './home'
import {useSelector} from 'react-redux'
import logo from '../asset/lofo.png'
// import Product from './product'
// import Contact from './contact'
// import Notfound from './notfound'
import React, { useState } from "react";
import '../asset/lofo.css'

function Navbar() {
  const prc = useSelector((state)=> state.price.value)
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav" data-aos="zoom-in">
      <img src={logo} alt='logo' className="nav__brand"></img>
      <ul className={active}>
              <li className="nav__item"> <Link  className="btn" data-aos="zoom-in-up" to='home'>Home</Link>          </li>
              <li className="nav__item">  <Link className="btn" data-aos="zoom-in-up" to='product'>Products</Link></li>
              <li className="nav__item">  <Link className="btn" data-aos="zoom-in-up" to='contact'>Contact</Link></li>
              <li className="nav__item">  <Link className="btn" data-aos="zoom-in-up" to='cart'>Cart{prc}</Link></li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
     
      
     

  );
}

export default Navbar;