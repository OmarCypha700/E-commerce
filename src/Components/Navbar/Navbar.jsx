import { Badge } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import './Navbar.css';

const Navbar = () => {




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

  return (
    <header id="header">
      <a href="/Home" className="logo">
        <h1>Dex Boutique</h1>
      </a>

      <nav>
        <ul id="navbar">
          <li>
            <a className="active" href="/Home">
              Home
            </a>
          </li>
          <li>
            <a href="/Shop">Shop</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li>
            <a id='cart' href="/Cart">
              <Badge badgeContent={2} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </a>
          </li>
          <CloseIcon id='close' fontSize="large" onClick={handleClose}></CloseIcon>
        </ul>
      </nav>

      <div id="mobile">
        <Badge id='cart__mobile' badgeContent={2} color="primary">
          <ShoppingCartIcon  className='cart' />
        </Badge>
        <MenuIcon id='menu' className="menu"fontSize="large" onClick={handleMenu} ></MenuIcon>
      </div>
    </header>
  );
}

export default Navbar