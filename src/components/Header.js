import "./Header.css";
import logo from "../images/logo/TehnoShop-logos_white.png";
import personIconWhite from "../images/icons/person-white.svg";
import basketIconWhite from "../images/icons/basket-white.svg";
// import { Link } from "react-router-dom";

function Header(props) {
  const sendDataToCartHandler = (e) => {
    e.preventDefault();
    console.log(e);
    props.onAddToCart(e);
  };
  return (
    <div>
      <div className="container">
        <img src={logo} alt="logo"></img>

        <input type="text" placeholder="Search products"></input>
        <div className="links">
          <a href="#home">
            <img src={personIconWhite} alt="person-icon" height={30}></img>
          </a>
          <a href="#modal">
            <button
              className="cart-icon"
              value="submit"
              onClick={sendDataToCartHandler}
            >
              <img src={basketIconWhite} alt="basket-icon" height={30}></img>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
