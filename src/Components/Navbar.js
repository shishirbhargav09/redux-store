import React from 'react'
import './Navbar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
        <div className="Navbar">
            <div className="site_logo">

                <h2> <AiOutlineShoppingCart/> REDUX STORE</h2>
            </div>
            <div className="Navbar_items">
                <ul>
                    <li>
                        <Link to="/">Home</Link> </li>
                    <li> <Link to="/cart">Cart</Link></li>
                </ul>
            </div>
            <div className="cart">
                <h3>CART ITEMS : 0</h3>
            </div>
        </div>
    </div>
  )
}

export default Navbar