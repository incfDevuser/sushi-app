import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CarrouselProductCard from "./CarrouselProductCard";
import { useProduct } from "../Products/Context/ProductContext";

const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const Carrousel = () => {
  const { productos } = useProduct();
  const [shuffledProducts, setShuffledProducts] = useState([]);
  useEffect(() => {
    console.log("Productos:", productos);
    setShuffledProducts(shuffleArray(productos));
  }, [productos]);
  if (shuffledProducts.length === 0) {
    return <p>Cargando productos...</p>;
  }
  return (
    <div style={{ width: "100%", maxWidth: "600px", height: "400px" }}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={500}
        pagination={{ clickable: true }}
      >
        {shuffledProducts.map((product) => (
          <SwiperSlide key={product._id}>
            <CarrouselProductCard
              id={product._id}
              nombre={product.nombre}
              descripcion={product.descripcion}
              precio={product.precio}
              imagenUrl={product.imagenUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrousel;
