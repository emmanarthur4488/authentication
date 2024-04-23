import React, { useState } from 'react'
import './navbar.css'
import Label from '/src/IMG/label.png'
import {Link} from 'react-router-dom'

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }


  return (
    <nav>
      <h1>GramDech</h1>
      <ul className={mobileMenu?'': 'hide-mobile-menu'}>
        <Link to='/store' className="link"><li >Home</li></Link>
        <Link to='/mac' className="link"><li>Services</li></Link>
        <Link to='/ipad' className="link"><li>Blog</li></Link>
        <Link to='/iphone' className="link"><li>About</li></Link>
        <Link to='/watch' className="link"><li>Watch</li></Link>
        <Link to='/airpods' className="link"><li>favorite</li></Link>
        <Link to='/tv' className="link"><li>settings</li></Link>
        <Link to='/apple' className="link"><li>message</li></Link>
        <Link to='/support' className="link"><li>Supports</li></Link>
      </ul>
      <img src={Label} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
