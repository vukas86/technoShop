import SmallPic from "../../images/pictures/blender-small.png";

import "./Cart.css";

const Cart = (props) => {
  if (props.cartArray.length === 0) return;
  const productName = props.cartArray[0].title;
  const productPrice =
    props.cartArray[0].quantity.quantity * props.cartArray[0].price;
  const productImage = props.cartArray[0].image;
  return (
    <>
      <div className="modal" id="modal">
        <div className="cart-container">
          <div className="cart-item">
            <img src={productImage} alt="small-pic"></img>
            <div className="left">
              <p>{productName}</p>
              <div className="cart-btns">
                <button className="cart-btns__action cart-btns__minus">
                  -
                </button>
                <span>1</span>
                <button className="cart-btns__action cart-btns__plus">+</button>
              </div>
            </div>
            <div className="right">
              <span>{productPrice}$</span>
              <button>
                <i class="fa fa-trash"></i>
              </button>
            </div>
          </div>
          <div className="cart-item">
            <img src={SmallPic} alt="small-pic"></img>
            <div className="left">
              <p>
                The weather is amazing, walk with me through the pathway of more
                success. Take this journey with me, Lion!
              </p>
              <div className="cart-btns">
                <button className="cart-btns__action cart-btns__minus">
                  -
                </button>
                <span>1</span>
                <button className="cart-btns__action cart-btns__plus">+</button>
              </div>
            </div>
            <div className="right">
              <span>15.99$</span>
              <button>
                <i class="fa fa-trash"></i>
              </button>
            </div>
          </div>
          <div className="cart-item">
            <img src={SmallPic} alt="small-pic"></img>
            <div className="left">
              <p>
                The weather is amazing, walk with me through the pathway of more
                success. Take this journey with me, Lion!
              </p>
              <div className="cart-btns">
                <button className="cart-btns__action cart-btns__minus">
                  -
                </button>
                <span>1</span>
                <button className="cart-btns__action cart-btns__plus">+</button>
              </div>
            </div>
            <div className="right">
              <span>15.99$</span>
              <button>
                <i class="fa fa-trash"></i>
              </button>
            </div>
          </div>

          <button className="btn-checkout">Proceed To Checkout</button>
        </div>
      </div>
    </>
  );
};
export default Cart;
