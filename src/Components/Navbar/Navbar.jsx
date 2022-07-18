import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {

  return (
    <div className="mainNavbar">
      <div className="navTop">
          <span>    
            <Link className="auth" to="/login">Login | </Link> 
            <Link className="auth" to="/register">Register</Link>
          </span>
      </div>

      <div className="navMid">
          <div className="midLeft">
              <Link className="homeicon" to="/"> <img src="https://www.naturesbasket.co.in/Images/logosnew.png?v=2" alt="natureBasket" /></Link>
          </div>

          <div className="midRight">
              <div className="midSearch">
                  <input className="Nav-searchbar" type="text" name="search" placeholder="Start shopping" />
              </div> 
          </div>
      </div>

      <div className="navBottom">
          <button   
            style = {{
              width: "300px", 
              height: "40px",
              marginTop: "10px", 
              borderRadius: "3px", 
              color: "#911548",
              fontSize: "20px",
              border: "none"
            }}>SHOP BY CATEGORY</button>
          <Link className="nav-link" to="/"><button>MY ORDERS</button></Link>
          <Link className="nav-link" to="/gifting"><button>GIFTING</button></Link>
          <Link className="nav-link" to="/rewards"><button>REWARDS</button></Link>
          <Link className="nav-link" to="/blog"><button>BLOG</button></Link>
          <Link className="nav-link" to="/product"><button>OFFERS</button></Link>
          <Link className="nav-link" to="/cselection"><button>CONNOISSEUR'S SELECTION</button></Link>
          <Link className="nav-link" to="/bsvisit"><button>BOOK STORE VISIT</button></Link>
      </div>
    </div>
  )
}

export default Navbar