import "./Menu.css";
import downArrowIcon from "../../images/icons/chevron-down-arrow.svg";

function Menu() {
  return (
    <div>
      <section className="menuContainer">
        <div className="all-cat">
          <li>All Categories </li>
          <img src={downArrowIcon} alt="arrow icon" height={15}></img>
        </div>

        <div className="menu__items">
          <a href="home" className="active">
            Home Appliances
          </a>
          <a href="home">TV / AV</a>
          <a href="home">IT / Gaming</a>
          <a href="home">Special Offers / Sales</a>
        </div>
      </section>
    </div>
  );
}

export default Menu;
