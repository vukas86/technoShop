import "./Info.css";

import headset from "../../images/icons/headset.svg";
import hand from "../../images/icons/handshake.svg";
import hq from "../../images/icons/office-building-marker-outline.svg";
import logo from "../../images/logo/TehnoShop-logos_white.png";
import payment from "../../images/pictures/payment2.png";

function Info() {
  return (
    <div>
      <div className="bg-image">
        <div className="contact-container">
          <div className="info-card">
            <img src={headset} alt="center"></img>
            <h2>Call Center</h2>
            <a href="tel:123-456-7890">123-456-7890</a>
            <a href="mailto:info@technoshop.com">info@technoshop.com</a>
          </div>
          <div className="info-card">
            <img src={hand} alt="handshake"></img>
            <h2>Legal Enteties</h2>
            <a href="tel:123-456-888">123-456-888</a>
            <a href="mailto:legalenteties@technoshop.com">
              legalenteties@technoshop.com
            </a>
          </div>
          <div className="info-card">
            <img src={hq} alt="center"></img>
            <h2>HQ</h2>
            <p>Generala Gambete 44, Belgrade</p>
            <a href="mailto:office@technoshop.com">office@technoshop.com</a>
          </div>
        </div>
        <div className="about-container">
          <img src={logo} alt="logo" className="logo"></img>
          <div className="logos">
            <h3>Follow Us On</h3>
            <i class="fa fa-facebook-f"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-twitter"></i>
          </div>
          <img src={payment} alt="cards" className="pay-cards"></img>
        </div>
      </div>
    </div>
  );
}
export default Info;
