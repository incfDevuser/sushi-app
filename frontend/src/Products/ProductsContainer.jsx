import React from 'react'
import ProductList from './Components/ProductList'


const ProductsContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 bg-cover bg-center">
      <div>
        <ProductList/>
      </div>
    </div>
  )
}

export default ProductsContainer
