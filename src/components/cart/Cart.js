import CartItems from "./CartItems";

import "./Cart.css";

const Cart = (props) => {
  console.log(props.cartArray);

  return (
    <>
      <div className="modal" id="modal">
        <div className="cart-container">
          {props.cartArray.map((e) => {
            return (
              <CartItems
                id={e.id}
                title={e.title}
                image={e.image}
                price={e.price}
                quantity={e.quantity.quantity}
              />
            );
          })}

          <button className="btn-checkout">Proceed To Checkout</button>
        </div>
      </div>
    </>
  );
};
export default Cart;
