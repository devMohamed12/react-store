import React from 'react'
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

function Product(props)
{
  const { product, onAdd, showDetails } = props;
  
  return (
    <div className="card  suggestedProduct" key={product.id}>
      <div className="image-container">
        <img className="card-img-top" src={product.image} alt={product.title} />
      </div>
      <div className="card-body">
        {showDetails === false ? (
          <>
            <h5 className="card-title">{product.title.slice(0, 20)}</h5>
            <p className="card-text">{product.description.slice(0, 37)}...</p>
            <Link
              to={`/prodcuts/${product.id}`}
              className="btn btn-primary button"
              // onClick={()=>console.log(product.id)}
            >
              see more
            </Link>
          </>
        ) : (
          <>
            <motion.h3
            
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 3 }}
              className="card-title mb3"
            >
              {product.title}
            </motion.h3>
            <p className="card-text">{product.description}</p>
            <p>price is {product.price}$</p>
          </>
        )}

        <button
          className="btn btn-danger buyButton "
          onClick={() => {
            onAdd(product);
          }}
        >
          buy now
        </button>
      </div>
    </div>
  );
}

export default Product