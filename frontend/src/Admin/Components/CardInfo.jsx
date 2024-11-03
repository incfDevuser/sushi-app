import React from 'react';

const CardInfo = ({ nombre, cantidad, fontColor }) => {
  return (
    <div className=" rounded-lg p-4 shadow-lg bg-white text-center">
      <p className="text-xl font-semibold text-gray-700">{nombre}</p>
      <p className={`text-3xl font-bold text-${fontColor}-600 mt-2"`}>{cantidad}</p>
    </div>
  );
};

export default CardInfo;
