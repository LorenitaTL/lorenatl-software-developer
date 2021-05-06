import React from "react";

export const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <h2>CONTACTO</h2>
      <div className="content">
        <div className="item">
          <i className="fab fa-linkedin fa-2x"></i>
          <p>Linkedin</p>
          <p>
            <a
              href="https://www.linkedin.com/in/lorena-trujillo-landeros-83638a114/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white" }}
            >
              Lorena Trujillo Landeros
            </a>
          </p>
        </div>
        <div className="item">
          <i className="fas fa-envelope-open fa-2x"></i>
          <p>E-mail</p>
          <p>lore7096@gmail.com</p>
        </div>
        <div className="item">
          <i className="fab fa-whatsapp-square fa-2x"></i>
          <p>Whatsapp</p>
          <p>+52-494-116-0045</p>
        </div>
      </div>
    </footer>
  );
};
