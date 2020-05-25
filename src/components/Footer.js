import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-link" />
        <h4>
          copyright&copy; {new Date().getFullYear()}
          <span> Masila</span> all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
