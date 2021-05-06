import React from "react";
import image from "../assets/Recurso 1.svg";

export const Home = () => {
  return (
    <div className="home main" id="home">
      <div className="details">
      <h3>¡Hola! mi nombre es</h3>
        <h1>Lorena Trujillo Landeros</h1>
        <h3> y soy  desarrolladora de Software </h3>
        <br/>
        <p>
          Soy muy activa y autodidacta y esto me lleva a 
          querer aprender muchas cosas constantemente.
          Continua navegando para que conozcas más acerca de
           mi y mi trabajo
        </p>
      </div>
      <div>
        <img src={image} alt="home" className="img-main" />
      </div>
    </div>
  );
};
