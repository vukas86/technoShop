import "./Header.css";
import logo from "../../images/logo/TehnoShop-logos_white.png";
import personIconWhite from "../../images/icons/person-white.svg";
import basketIconWhite from "../../images/icons/basket-white.svg";

function Header(props) {
  const itemsTotal = props.cartItemsNumber.reduce((acc, curVal) => {
    return acc + curVal.quantity.quantity;
  }, 0);

  return (
    <div>
      <div className="container">
        <img src={logo} alt="logo"></img>

        <input type="text" placeholder="Search products"></input>
        <div className="links">
          <a href="#home">
            <img src={personIconWhite} alt="person-icon" height={30}></img>
          </a>
          <a href="#home" onClick={props.onOpenCart}>
            <img src={basketIconWhite} alt="basket-icon" height={30}></img>
            <span>{itemsTotal}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
