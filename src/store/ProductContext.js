import { createContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([
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
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
