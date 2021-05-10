import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Gallery } from "./Gallery";
import { Modal } from "./Modal";
import p1 from "../assets/projects_images/project_1.png";
import p2 from "../assets/projects_images/project_2.png";
import p3 from "../assets/projects_images/project_3.png";
import p5 from "../assets/projects_images/project_5.png";
import bbb2 from "../assets/bbb-images/bbb-2.png";
import bbb3 from "../assets/bbb-images/bbb-3.png";
import bbb4 from "../assets/bbb-images/bbb-4.png";
import bbb5 from "../assets/bbb-images/bbb-5.png";
import bbb6 from "../assets/bbb-images/bbb-6.png";
import bbb7 from "../assets/bbb-images/bbb-7.png";
import bbb8 from "../assets/bbb-images/bbb-8.jpg";
import bbb9 from "../assets/bbb-images/bbb-9.jpg";
import bbb10 from "../assets/bbb-images/bbb-10.jpg";
import bbb11 from "../assets/bbb-images/bbb-11.jpg";
import bbb12 from "../assets/bbb-images/bbb-12.jpg";

import r1 from "../assets/restaurant/r1.jpg";
import r2 from "../assets/restaurant/r2.jpg";
import r3 from "../assets/restaurant/r3.jpg";
import r4 from "../assets/restaurant/r4.jpg";
import r5 from "../assets/restaurant/r5.jpg";
import r6 from "../assets/restaurant/r6.jpg";
import r7 from "../assets/restaurant/r7.jpg";
import r8 from "../assets/restaurant/r8.jpg";
import { useModal } from "../hooks/useModal";

export const MyProjects = () => {
  const { isShowing, toggle } = useModal();
  const [title, setTitle] = useState();
  const [arrayImages, setArrayImages] = useState();
  const projectSelected = (project) => {
    if (project === "restaurant") {
      setTitle("Diseño App Restaurante");
      setArrayImages([r1, r2, r3, r4, r5, r6, r7, r8]);
    } else {
      setTitle("Diseño BimBomBá!");
      setArrayImages([
        bbb2,
        bbb3,
        bbb4,
        bbb5,
        bbb6,
        bbb7,
        bbb8,
        bbb9,
        bbb10,
        bbb11,
        bbb12,
      ]);
    }
  };
  return (
    <div className="my-projects" id="my-projects">
      <h2 className="subtitle">Mis Proyectos</h2>
      <div className="projects main">
        <ProjectCard
          img={p1}
          title={"Giphy App Search"}
          description={"Sitio web buscador de imágenes en formato GIF"}
          tags={["React"]}
          front="https://github.com/LorenitaTL/giphy-search-app"
          children={
            <a
              href="https://lorenitatl.github.io/giphy-search-app/"
              target="_blank"
              rel="noreferrer"
            >
              <h4> Live Web</h4>
            </a>
          }
        />
        <ProjectCard
          img={p2}
          title={"CRUD React - Node js - MongoDB"}
          description={
            "Sistema de Gestión de libros, el cual puede ser implementado en una biblioteca o una librería"
          }
          tags={["React", "Node", "MongoDB", "SASS"]}
          front="https://github.com/LorenitaTL/crud-react-node-mongodb"
          back="https://github.com/LorenitaTL/crud-mern-backend"
          children={
            <a
              href="https://crud-mern-backend.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h4> Live Web</h4>
            </a>
          }
        />
        <ProjectCard
          img={p3}
          title={"CRUD React - PHP - MySQL"}
          description={
            "Mini sistema de control de inventario, el cual puede ser escalable para implementarse en cualquier tienda de autoservicio"
          }
          tags={["React", "PHP", "MySQL", "SASS"]}
          front="https://github.com/LorenitaTL/crud-react-php-mysql"
          back="https://github.com/LorenitaTL/backend-php"
          children={
            <a
              href="https://lorenitatl.000webhostapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h4> Live Web</h4>
            </a>
          }
        />
        <ProjectCard
          img={bbb2}
          title={"Diseño BimBomBá"}
          description={
            "Diseño de página web y aplicación móvil para venta y renta de servicios para fiestas "
          }
          tags={["React", "Flutter"]}
          children={
            <div onClick={() => projectSelected("bbb")}>
              <h4 onClick={toggle}>Ver galería</h4>
            </div>
          }
        />
        <ProjectCard
          img={r1}
          title={"Diseño App Restaurante"}
          description={
            "Diseño de aplicación móvil para servicio de restaurante"
          }
          tags={["Flutter"]}
          front="https://github.com/LorenitaTL/Flutter-repo/tree/master/restaurant_bar_app"
          children={
            <div onClick={() => projectSelected("restaurant")}>
              <h4 onClick={toggle}>Ver galería</h4>
            </div>
          }
        />
        <ProjectCard
          img={p5}
          title={"Sliders"}
          description={
            "Ejemplos de sliders, los cuales pueden ser implementados en cualquier proyecto"
          }
          tags={["React","CSS"]}
          front="https://github.com/LorenitaTL/sliders"
          children={
            <a
              href="https://lorenitatl.github.io/sliders/"
              target="_blank"
              rel="noreferrer"
            >
              <h4> Live Web</h4>
            </a>
          }
        />
        <ProjectCard
          img={p5}
          title={"Clima"}
          description={
            "Ejemplos de sliders, los cuales pueden ser implementados en cualquier proyecto"
          }
          tags={["React","CSS"]}
          front="https://github.com/LorenitaTL/sliders"
          children={
            <a
              href="https://lorenitatl.github.io/sliders/"
              target="_blank"
              rel="noreferrer"
            >
              <h4> Live Web</h4>
            </a>
          }
        />
        <ProjectCard
          img={p5}
          title={"Recetas"}
          description={
            "Ejemplos de sliders, los cuales pueden ser implementados en cualquier proyecto"
          }
          tags={["React","CSS"]}
          front="https://github.com/LorenitaTL/sliders"
          children={
            <a
              href="https://lorenitatl.github.io/sliders/"
              target="_blank"
              rel="noreferrer"
            >
              <h4> Live Web</h4>
            </a>
          }
        />
      </div>
      <Modal
        isShowing={isShowing}
        content={<Gallery title={title} toggle={toggle} images={arrayImages} />}
      />
      {/* <Modal
        isShowing={isShowing}
        content={
          <Gallery
            title="Galería App Restaurante"
            toggle={toggle}
            images={[r1, r2, r3, r4, r5, r6, r7, r8]}
          />
        }
      /> */}
    </div>
  );
};
