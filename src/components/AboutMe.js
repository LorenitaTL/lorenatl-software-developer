import React from "react";
import img2 from "../assets/img-2.svg";
import img3 from "../assets/img-3.svg";
import img4 from "../assets/img-4.svg";
import icon1 from "../assets/education.svg";
import icon2 from "../assets/work.svg";
import icon3 from "../assets/skills.svg";

import { CardAbMe } from "./CardAbMe";

export const AboutMe = () => {
  return (
    <div className="about-me main " id="about-me">
      <h2 className="subtitle text-grey">Acerca de mi</h2>
      <div className="cards">
        <CardAbMe
          img={img2}
          icon={icon1}
          title={"Educación"}
          description="Egresada de la carrera de Ingeniería en Sistemas Computacionales en el TecNM Campus Jerez.Especialidad en Programación de Dispositivos Móviles.Generación 2015-2020"
        />
        <CardAbMe
          img={img3}
          icon={icon2}
          title={"Mi trabajo"}
          description="Desarrollo web y móvil, utilizando tecnologías como Raect JS, Flutter, Node JS, PHP, entre otros. Me gusta seguir cursos de programación para mejorar mis habilidades"
        />
        <CardAbMe
          img={img4}
          icon={icon3}
          title={"Soft Skills"}
          description="Soy una persona participativa y autodidacta, buscando siempre aprender cosas nuevas.Me gusta ayudar a otras personas a solucionar problemas y me adapto a los retos que se me presenten"
        />
      </div>
    </div>
  );
};
