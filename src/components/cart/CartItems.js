import { useState } from "react";

const CartItems = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);

  const plusHandler = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };
  const minusHandler = (e) => {
    e.preventDefault();
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };
  console.log(quantity);
  return (
    <>
      <div className="cart-item">
        <img src={props.image} alt="small-pic"></img>
        <div className="left">
          <p>{props.item}</p>
          <div className="cart-btns">
            <button
              className="cart-btns__action cart-btns__minus"
              onClick={minusHandler}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="cart-btns__action cart-btns__plus"
              onClick={plusHandler}
            >
              +
            </button>
          </div>
        </div>
        <div className="right">
          <span>{(quantity * props.price).toFixed(2)}$</span>
          <button>
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
};
export default CartItems;
