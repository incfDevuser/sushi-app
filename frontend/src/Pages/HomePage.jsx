import React from 'react'
import Hero from '../Components/Hero'
import ProductosDestacados from '../Products/Components/ProductosDestacados'

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28 bg-cover bg-center">
        <Hero/>
        {/* Productos Destacados */}
        <ProductosDestacados/>
    </div>
  )
}

export default HomePage
