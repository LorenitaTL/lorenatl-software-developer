import React, { useState } from "react";
import { Link } from "react-scroll";

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);

  const handleShowMenu = () => setShowMenu(!showMenu);
  return (
    <nav className="navbar">
      <div>
        <div className="button-menu" onClick={handleShowMenu}>
          <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
        </div>
      </div>
      <div className={`options ${showMenu ? "options" : "hide-options"}`}>
        <p>
          <Link
            to="home"
            smooth={true}
            duration={1000}
            onClick={handleShowMenu}
          >
            Inicio
          </Link>
        </p>
        <p>
          <Link
            to="about-me"
            smooth={true}
            duration={1000}
            onClick={handleShowMenu}
          >
            Acerca de mí
          </Link>
        </p>
        <p>
          <Link
            to="my-projects"
            smooth={true}
            duration={1000}
            onClick={handleShowMenu}
          >
            Mis Proyectos
          </Link>
        </p>
        <p>
          <Link
            to="experience"
            smooth={true}
            duration={1000}
            onClick={handleShowMenu}
          >
            Experiencia
          </Link>
        </p>
        <p>
          <Link
            to="skills"
            smooth={true}
            duration={1000}
            onClick={handleShowMenu}
          >
            Habilidades
          </Link>
        </p>
        <p>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            onClick={handleShowMenu}
          >
            Contacto
          </Link>
        </p>
      </div>
    </nav>
  );
};
