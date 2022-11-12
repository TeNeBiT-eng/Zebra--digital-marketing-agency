import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/svg/Logozebra.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <nav className="navBar">
        <div className="logoContainer">
          <img src={Logo} alt="surgicare-logo" />
        </div>
        <div className={`navItems ${isOpen && "open"}`}>
          <a href="#aboutus">About us</a>
          <a href="#services">Services</a>
          <a href="#latestwork">Latest Work</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#consultation" className="btn-consult btn-contactSm">
            <button>Contact Us</button>
          </a>
        </div>
        <div className="navItem">
          <a href="#consultation" className="btn-consult btn-contactLg">
            <button>Contact Us</button>
          </a>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bars"></div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
