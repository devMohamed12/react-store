import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import Product from './Product';
import { useEffect } from 'react';
import "./style/productDetails.css"

function ProductDetails(props) {
  const [product, setProduct] = useState({});  
  const [suggestedProducts, setsuggestedProducts] = useState(); 
  
  const productDetails = useParams();
  const { onAdd } = props;
  

  // const fetch_specific_category = (category) => {
  //   fetch(`https://fakestoreapi.com/products/category/${category}`)
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // };
    // console.log(useParams());
    // console.log(productDetails);
    // console.log(productDetails.productID);
  
    
  const api_url = "https://fakestoreapi.com/products";
  

    
    useEffect(() => {
      fetch(`${api_url}/${productDetails.productID}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }, [productDetails]);

  useEffect(() => {
    fetch(`${api_url}/category/${product.category}`)
      .then((response) => response.json())
      .then((data) => setsuggestedProducts(data));
  }, [product]);
    
    return (
      <div className="productDetails">
        <Product product={product} onAdd={onAdd} showDetails={true} />
        <div>
          <h2 className="text-center">more nice products</h2>

          {suggestedProducts && (
            <div className="productsss-container suggestedProduct container">
              {suggestedProducts.map((product) => {
                return (
                  <>
                    <Product
                      product={product}
                      onAdd={onAdd}
                      showDetails={false}
                      key={product.id}
                    />
                  </>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
}

export default ProductDetails