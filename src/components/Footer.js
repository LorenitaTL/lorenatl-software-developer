import React from "react";

export const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <h2>CONTACT ME</h2>
      <div className="content">
        <div className="item">
          <p>Linkedin</p>
          <i className="fab fa-linkedin"></i>
          <p>
            <a href="https://www.linkedin.com/in/lorena-trujillo-landeros-83638a114/" target="_blank" rel="noreferrer">
              Lorena Trujillo Landeros
            </a>
          </p>
        </div>
        <div className="item">
          <p>E-mail</p>
          <i className="fas fa-envelope-open"></i>
          <p>lore7096@gmail.com</p>
        </div>
        <div className="item">
          <p>Whatsapp</p>
          <i className="fab fa-whatsapp"></i>
          <p>+52-494-116-0045</p>
        </div>
      </div>
    </footer>
  );
};
