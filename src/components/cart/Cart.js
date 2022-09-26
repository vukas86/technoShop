import CartItems from "./CartItems";

import "./Cart.css";

const Cart = (props) => {
  const saveDataHandler = (enteredProduct) => {
    props.onSavedProducts(enteredProduct);
  };
  return (
    <>
      <div className="modal" id="modal">
        <div className="cart-container">
          {props.cartArray.map((e) => {
            return (
              <CartItems
                id={e.id}
                key={e.id}
                title={e.title}
                image={e.image}
                price={e.price}
                quantity={e.quantity.quantity}
                onSaveData={saveDataHandler}
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
