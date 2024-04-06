import React, { useEffect, useState } from "react";
import "./style/main.css";
import Product from './Product';
import { motion, AnimatePresence } from "framer-motion";


function Products(props) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const { onAdd } = props;

  const fake_Store_api_url = "https://fakestoreapi.com/products";

  // fetching products from fake store api
  const fetchProducts = () => {
    fetch(fake_Store_api_url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  // fetching categories from fake store api
  const fetchCategories = () => {
    fetch(`${fake_Store_api_url}/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  // fetching specific category  from fake store api
  const fetch_specific_category = (category) => {
    fetch(`${fake_Store_api_url}/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container my-0">
        <h1 className="text-center my-3">this is our products</h1>

        <div className="categories_container d-flex justify-content-center ">
          
          <button
            className="btn btn-primary  m-1 p-3 btn-sm"
            onClick={() => {
              fetchProducts();
            }}
          >
            All
          </button>
          {categories.map((category) => {
            return (
              <>
                <button
                  className="btn btn-primary btn-sm m-1 "
                  key={category}
                  onClick={() => {
                    fetch_specific_category(category);
                  }}
                >
                  {category}
                </button>
              </>
            );
          })}
        </div>

        <div className="productsss-container my-5">
          {products.map((product) => {
            return (
              <>
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 10 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -40 }}
                    whileTap={{scale: 0.9}}
                    className=""
                    key={product.id}
                  >
                    <Product
                      product={product}
                      onAdd={onAdd}
                      showDetails={false}
                    />
                  </motion.div>
                </AnimatePresence>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
