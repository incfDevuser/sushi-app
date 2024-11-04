import React from 'react';
import ProductList from './Components/ProductList';

const ProductsContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-12 bg-cover bg-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        <ProductList />
      </div>
    </div>
  );
};

export default ProductsContainer;
