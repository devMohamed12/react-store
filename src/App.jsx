import { BrowserRouter , Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./componets/Navbar.jsx";
import Home from "./componets/pages/Home.jsx";
import Cart from "./componets/pages/Cart.jsx";
import About from "./componets/pages/About.jsx";
import ContactUs from "./componets/pages/ContactUs.jsx";
import ProductDetails from "./componets/ProductDetails.jsx";
import Product from "./componets/Product.jsx";

// use one file to export all
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import { useState } from "react";
import "./componets/style/main.css";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const onAdd = (product) => {
    // change to isAdded in object
    // added?      :setCartItem([...cartItem, { ...product, qty: 1 }]):
    const extist = cartItem.find((x) => x.id === product.id);
    if (extist) {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...extist, qty: extist.qty + 1 } : x
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  // const onRemove = (product) => {
  //   const extist = cartItem.find((x) => x.id === product.id);
  //   if (extist.qty === 1) {
  //     setCartItem(cartItem.filter((x) => x.id !== product.id));
  //   } else {
  //     setCartItem(
  //       cartItem.map((x) =>
  //         x.id === product.id ? { ...extist, qty: extist.qty - 1 } : x
  //       )
  //     );
  //   }
  // };

  return (
    <BrowserRouter>
      
      <Navbar cartItemLegnth={cartItem.length} />
      
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />

        <Route path="/" element={<Home onAdd={onAdd} />} />
        <Route path="about" element={<About />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route
          path="cart"
          element={
            <Cart cartItem={cartItem} onAdd={onAdd} setCartItem={setCartItem} />
          }
        />
        <Route
          path="/prodcuts/:productID"
          element={<ProductDetails onAdd={onAdd} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
