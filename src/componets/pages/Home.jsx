import React from "react";
import Slider from "../Slider.jsx";
import Footer from "../Footer.jsx";
import Products from "../Products.jsx";
import { useParams } from "react-router-dom";

function Home(props) {
  // console.log(useParams);
  const { onAdd } = props;
  // console.log(props);
  // console.log(onAdd);
  return (
    <>
      <Slider />

      <Products onAdd={onAdd} />
      <Footer />
    </>
  );
}

export default Home;
