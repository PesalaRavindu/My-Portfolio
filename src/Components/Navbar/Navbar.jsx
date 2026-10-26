import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (menuName) => {
    setMenu(menuName);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">Pesala.</div>
      
      <div 
        className="nav-toggle" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <i className={isMobileMenuOpen ? "bx bx-x" : "bx bx-menu"}></i>
      </div>

      <ul className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <li>
          <AnchorLink className="anchor-link" href="#home" onClick={() => handleLinkClick("home")}>
            <p className={menu === "home" ? "active" : ""}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about" onClick={() => handleLinkClick("about")}>
            <p className={menu === "about" ? "active" : ""}>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills" onClick={() => handleLinkClick("skills")}>
            <p className={menu === "skills" ? "active" : ""}>My Skills</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#portfolio" onClick={() => handleLinkClick("portfolio")}>
            <p className={menu === "portfolio" ? "active" : ""}>My Latest Work</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={() => handleLinkClick("contact")}>
            <p className={menu === "contact" ? "active" : ""}>Contact</p>
          </AnchorLink>
        </li>
        <li className="nav-menu-connect-mobile">
          <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={() => handleLinkClick("contact")}>
            <div className="nav-connect-mobile-btn">Connect With Me</div>
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
