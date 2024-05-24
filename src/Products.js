// import React from 'react'
// import Aside from './components/Aside'
// import './components/products.css'
// import ProductCard from './components/ProductCard'
// import {PRODUCTS} from './ProductsItem'
// import './components/products.css'
// const Products = () => {
//   return (
//     <div className='main-pro'>
//       <Aside/>
//       <div className='product-menu'>
//       <div className="particular-list">
//       {/* <ProductCard/> */}
     
//       {PRODUCTS.map((product)=>(
//         <ProductCard data={product}/>
//       ))}
//       </div>
      
//     </div>
//     </div>
//   )
// }

// export default Products




//FOURTH CODE

import React, { useState } from 'react';
import Aside from './components/Aside';
import './components/products.css';
import ProductCard from './components/ProductCard';
import { PRODUCTS } from './ProductsItem';

const Products = () => {
  const [category, setCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  const filteredProducts = category
    ? PRODUCTS.filter((product) => product.productCategory === category)
    : PRODUCTS;

  return (
    <div className="main-pro">
      <Aside handleCategoryClick={handleCategoryClick} />
      <div className="product-menu">
        <div className="particular-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
