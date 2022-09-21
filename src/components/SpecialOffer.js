import React, { useState } from "react";

import "./SpecialOffer.css";
import basketIconWhite from "../images/icons/basket-white.svg";

function SpecialOffer(props) {
  const [quantity, setQuantity] = useState(0);
  const clickMinusHandler = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };
  const clickPlusHandler = () => {
    setQuantity(quantity + 1);
  };
  const [data, setData] = useState("");
  const cartHandler = (e) => {
    e.preventDefault();
    setData("Hello");
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (quantity === 0) return;
    const product = {
      id: props.id,
      image: props.image,
      title: props.title,
      price: props.price,
      quantity: { quantity },
    };
    props.onSavedProducts(product);
  };

  return (
    <div>
      <div className="card_container">
        <div className="small_container"> -{props.discount}%</div>
        <img src={props.image} alt="placeholder"></img>
        <h2>{props.title}</h2>
        <p>€{props.price}</p>
        <div className="counter_btn">
          <button className="btn-minus" onClick={clickMinusHandler}>
            -
          </button>
          <span>{quantity}</span>
          <button className="btn-plus" onClick={clickPlusHandler}>
            +
          </button>
        </div>
        <button
          className="cart_btn"
          title="Add To Cart"
          value="submit"
          onClick={submitHandler}
        >
          <span>
            <img src={basketIconWhite} alt="basketIcon"></img>
          </span>
        </button>
      </div>
    </div>
  );
}
export default SpecialOffer;
