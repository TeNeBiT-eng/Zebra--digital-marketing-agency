import React from "react";
import "./header.css";
import HeaderImg from "../../assets/images/HeaderImage.png";

const Header = () => {
  return (
    <main>
      <div className="headerH1_headerImg">
        <div className="headerH1">
          <p className="H1">Creative Digital Marketing Agency</p>
          <p className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            blanditiis, hic sapiente assumenda reiciendis ipsum mollitia facilis
            nostrum molestias accusantium qui exercitationem voluptatibus.
            Harum, aut.
          </p>

          <button className="headerBtn">Contact Us</button>
        </div>

        <div className="headerImg">
          <img src={HeaderImg} alt="header_image" />
        </div>
      </div>
    </main>
  );
};

export default Header;
