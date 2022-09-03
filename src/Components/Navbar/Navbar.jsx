import { Badge } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import {Link, useLocation} from 'react-router-dom'
import './Navbar.css';

const Navbar = ({cart}) => {

const location = useLocation();

const handleMenu = () => {
    const menu = document.getElementById("menu");
    const nav = document.getElementById("navbar");
    if(menu) {
        menu.addEventListener("click", ()=>{
            nav.classList.add("active")
        })
    }
}

const handleClose = () => {
    const close = document.getElementById("close");
    const nav = document.getElementById("navbar");
    if(close) {
        close.addEventListener("click", ()=>{
            nav.classList.remove("active")
        })
    }
}

// if(!cart.total_items) return "loading..."

  return (
    <header id="header">
      <Link to="/" className="logo">
        <h1>Dex Boutique</h1>
      </Link>

      <nav>
        <ul id="navbar">
          <li>
            <Link to="/" className="active" >
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
            <li>
            {location.pathname === '/' && (
            <Link to="/cart" id='cart'>
              <Badge badgeContent={cart.total_items} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </Link>)}
            </li>
         
          <CloseIcon id='close' fontSize="large" onClick={handleClose}></CloseIcon>
        </ul>
      </nav>

      <div id="mobile">
      {location.pathname === '/' && (
        <Link to="/cart">
        <Badge id='cart__mobile' badgeContent={cart.total_items} color="primary">
          <ShoppingCartIcon  className='cart' />
        </Badge>
        </Link>)}
        <MenuIcon id='menu' className="menu"fontSize="large" onClick={handleMenu} ></MenuIcon>
      </div>
    </header>
  );
}

export default Navbar