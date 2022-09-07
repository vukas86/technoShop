import "./Header.css";
import logo from "../images/logo/TehnoShop-logos_white.png";
import personIconWhite from "../images/icons/person-white.svg";
import basketIconWhite from "../images/icons/basket-white.svg";

function Header() {
  return (
    <div>
      <div className="container">
        <img src={logo} alt="logo"></img>

        <input type="text" placeholder="Search products"></input>
        <div className="links">
          <a href="#home">
            <img src={personIconWhite} alt="person-icon" height={30}></img>
          </a>
          <a href="#home">
            <img src={basketIconWhite} alt="basket-icon" height={30}></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
