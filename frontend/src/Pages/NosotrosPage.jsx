import React from "react";

const NosotrosPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12 px-6 md:px-16 lg:px-32 py-12 bg-cover bg-center  text-gray-800">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Sobre Nosotros
      </h1>
      <p className="text-lg leading-relaxed max-w-3xl text-center">
        En <span className="font-semibold">Fukusuke</span>, nos apasiona llevar
        la frescura y los auténticos sabores de la cocina japonesa hasta tu
        mesa. Somos un local de sushi dedicado a la excelencia en cada detalle,
        desde la selección de los ingredientes más frescos hasta la preparación
        de cada pieza con amor y precisión.
      </p>
      <p className="text-lg leading-relaxed max-w-3xl text-center mt-6">
        Nuestro equipo de chefs está comprometido con la tradición y la
        innovación, creando platillos que capturan la esencia de Japón, mientras
        agregamos toques únicos para sorprender tu paladar. Ya sea que busques
        un clásico nigiri o una combinación especial de maki, en Fukusuke
        encontrarás una experiencia gastronómica única, donde el respeto por la
        calidad y el sabor es nuestra mayor prioridad.
      </p>
      <p className="text-lg leading-relaxed max-w-3xl text-center mt-6">
        Nos enorgullece ser parte de cada ocasión especial y cada momento de
        disfrute, brindando un ambiente cálido y acogedor en el que puedes
        disfrutar de sushi hecho con pasión y dedicación. ¡Te invitamos a que
        formes parte de la familia Fukusuke y descubras un mundo de sabores
        exquisitos!
      </p>
    </div>
  );
};

export default NosotrosPage;
