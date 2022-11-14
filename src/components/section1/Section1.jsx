import React from "react";
import "./section1.css";
import Asus from "../../assets/images/asus-logo.png";
import Allianz from "../../assets/images/allianz-1.png";
import Chase from "../../assets/images/chase.png";
import Newyorktimes from "../../assets/images/new-york-times.png";
import Linkedin from "../../assets/images/linkedin.png";
import SEO from "../../assets/svg/seo.svg";
import Webdev from "../../assets/svg/webdev.svg";
import Videdit from "../../assets/svg/videdit.svg";
import Content from "../../assets/svg/content.svg";
import SMM from "../../assets/svg/smmarketing.svg";
import PPC from "../../assets/svg/ppc.svg";

const Section1 = () => {
  return (
    <main>
      <div className="featured_certification">
        <p className="featured">Featured In</p>
        <p className="certification">Our Certification</p>
      </div>

      <div className="logocontainer">
        <div className="imgContainer">
          <img src={Asus} alt="" />
        </div>

        <div className="imgContainer">
          <img src={Allianz} alt="" />
        </div>

        <div className="imgContainer">
          <img src={Chase} alt="" />
        </div>

        <div className="imgContainer">
          <img src={Newyorktimes} alt="" />
        </div>

        <div className="imgContainer">
          <img src={Linkedin} alt="" />
        </div>
      </div>

      <div className="parentContainer">
        <div className="img_content">
          <div className="img">
            <img src={SEO} alt="" />
          </div>
          <p>Search Engine Optimization</p>
        </div>

        <div className="img_content">
          <div className="img">
            <img src={Webdev} alt="" />
          </div>
          <p>Website Design & Development</p>
        </div>

        <div className="DMM">
          <h1>Our Digital Marketing Expertise</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            possimus maxime sunt sed saepe ad doloremque qui nobis expedita
            blanditiis?
          </p>
        </div>

        <div className="img_content">
          <div className="img">
            <img src={Videdit} alt="" />
          </div>
          <p>Video Edit & Production</p>
        </div>

        <div className="img_content">
          <div className="img">
            <img src={Content} alt="" />
          </div>
          <p>Content Writing</p>
        </div>

        <div className="img_content">
          <div className="img">
            <img src={SMM} alt="" />
          </div>
          <p>Social Media Marketing</p>
        </div>

        <div className="img_content">
          <div className="img">
            <img src={PPC} alt="" />
          </div>
          <p>Pay Per Click (PPC)</p>
        </div>
      </div>
    </main>
  );
};

export default Section1;
