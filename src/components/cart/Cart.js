import CartItems from "./CartItems";

import "./Cart.css";

const Cart = (props) => {
  const saveDataHandler = (enteredProduct) => {
    props.onSavedProducts(enteredProduct);
  };

  return (
    <div>
      {(() => {
        if (props.cartArray.length > 0) {
          return (
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
          );
        } else {
          return (
            <div className="modal" id="modal">
              <div className="cart-container">
                <h2>Your cart is empty</h2>
                <button className="btn-checkout" onClick={props.onClick}>
                  Go Back
                </button>
              </div>
            </div>
          );
        }
      })()}
    </div>
  );
};
export default Cart;
