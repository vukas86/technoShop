import { useState } from "react";

import Header from "./components/header/Header";
import Menu from "./components/header/Menu";
import Card from "./components/card/Card";
import SpecialOffer from "./components/specialOffers/SpecialOffer";
import Banner2 from "./components/banner/Banner2";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [cartPage, setCartPage] = useState(false);

  const openCartHander = () => {
    setCartPage(true);
  };

  const closeCartHander = () => {
    setCartPage(false);
  };

  const savedProducts = (product) => {
    const chosenProducts = {
      ...product,
      id: Math.random().toString(),
    };
    setCart((cart) => [...cart, chosenProducts]);
  };

  const savedProductsHandler = (passedProduct) => {
    setCart(cart.filter((e) => e.id !== passedProduct.id));
  };

  const products = [
    {
      id: 1,
      discount: 15,
      image: "./images/pics/blender-removebg-preview.png",
      title: "Siemens 600 W Blender Food Preparing Machine MB1000UC",
      price: 45.13,
    },
    {
      id: 2,
      discount: 20,
      image: "./images/pics/geyser-removebg-preview.png",
      title: "Hylex Water Geyser, Capacity: 5-20 Litre",
      price: 31.53,
    },
    {
      id: 3,
      discount: 10,
      image: "./images/pics/refri-removebg-preview.png",
      title: "Bosch B36CL80ENS",
      price: 1053.59,
    },
    {
      id: 4,
      discount: 30,
      image: "./images/pics/washing_machine_PNG15578-removebg-preview.png",
      title: "BEKO Top Load Washing Machine | 70019-G | 7KG",
      price: 342.23,
    },
    {
      id: 5,
      discount: 15,
      image: "./images/pics/hmo-20-mdlx3-r.png",
      title: "Bosch 25L Serie 6 Built-In Microwave Oven 900W BEL554MS0A",
      price: 152.39,
    },
    {
      id: 6,
      discount: 22,
      image: "./images/pics/Capture-removebg-preview.png",
      title: "LG 43UQ75006LF 4K Ultra HD HDR Smart TV",
      price: 182.45,
    },
  ];

  return (
    <>
      {cartPage && (
        <Cart
          cartArray={cart}
          onSavedProducts={savedProductsHandler}
          onClick={closeCartHander}
        />
      )}

      <Header cartItemsNumber={cart} onOpenCart={openCartHander} />
      <Menu />
      <div className="cardContainer">
        <Card />
        <h3>Special Offers</h3>
        <div className="special_container">
          <SpecialOffer
            onSavedProducts={savedProducts}
            discount={products[0].discount}
            title={products[0].title}
            price={products[0].price}
            image={products[0].image}
          />
          <SpecialOffer
            onSavedProducts={savedProducts}
            discount={products[1].discount}
            title={products[1].title}
            price={products[1].price}
            image={products[1].image}
          />
          <SpecialOffer
            onSavedProducts={savedProducts}
            discount={products[2].discount}
            title={products[2].title}
            price={products[2].price}
            image={products[2].image}
          />
          <SpecialOffer
            onSavedProducts={savedProducts}
            discount={products[3].discount}
            title={products[3].title}
            price={products[3].price}
            image={products[3].image}
          />
          <SpecialOffer
            onSavedProducts={savedProducts}
            discount={products[4].discount}
            title={products[4].title}
            price={products[4].price}
            image={products[4].image}
          />
        </div>
        <Banner2 />
      </div>
      <Footer />
    </>
  );
}

export default App;
