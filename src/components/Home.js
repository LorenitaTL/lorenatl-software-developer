import React from "react";
import image from "../assets/Recurso 1.svg";

export const Home = () => {
  return (
    <div className="home main" id="home">
      <div className="details">
        <h1>Lorena Trujillo Landeros</h1>
        <h3>Software Developer</h3>
        <p>
          I am an active, participatory and self-taught woman. I like to learn
          new things and help solve problems. In the team projects in which I
          have participated, I am regularly the leader of the team because i
          like meeting new people and sharing conversations of all kinds. I
          enjoy learning new things about programming, especially frontend
          development (mobile and web)
        </p>
      </div>
      <div>
        <img src={image} alt="home" className="img-main" />
      </div>
    </div>
  );
};
