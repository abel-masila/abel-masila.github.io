import React from "react"
import logo from "../assets/logo.png"

import { FaAlignRight, FaCode } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <FaCode className="nav-logo"></FaCode>
          <button className="toggle-btn" type="button">
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
