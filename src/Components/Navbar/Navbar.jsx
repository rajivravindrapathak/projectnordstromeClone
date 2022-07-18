import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./Navbar.module.css";


function Navbar() {

  return (
    <div className="mainNavbar">
      <div>
        Free shipping over $89, or shop online and pick up select orders at a Nordstrom Rack or Nordstrom store. Learn More Search
      </div>
      <div className="navTop">
          <span>    
            <Link className="auth" to="/login">Sign In</Link> 
            {/* <Link className="auth" to="/register">Register</Link> */}
          </span>
      </div>

      <div className="navMid">
          <div className="midLeft">
              <Link className="homeicon" to="/"> <img src="https://n.nordstrommedia.com/alias/nordstrom-rack-logo.svg" alt="nordstromrack" /></Link>
          </div>

          <div className="midRight">
              <div className="midSearch">
                  <input className="Nav-searchbar" type="text" name="search" placeholder="Search for product and brand" />
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
          <Link className="nav-link" to="/"><button>Clearence</button></Link>
          <Link className="nav-link" to="/women"><button>Women</button></Link>
          <Link className="nav-link" to="/men"><button>Men</button></Link>
          <Link className="nav-link" to="/kids"><button>Kids</button></Link>
          <Link className="nav-link" to="/shoes"><button>Shoes</button></Link>
          <Link className="nav-link" to="/activewear"><button>Activewear</button></Link>
          <Link className="nav-link" to="/bag"><button>Bag & Acessres</button></Link>
          <Link className="nav-link" to="/home"><button>Home</button></Link>
          <Link className="nav-link" to="/beauty"><button>Beauty</button></Link>
          <Link className="nav-link" to="/gift"><button>Gift</button></Link>
      </div>
    </div>
  )
}

export default Navbar