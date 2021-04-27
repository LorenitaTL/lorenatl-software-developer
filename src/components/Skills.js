import React from "react";
import flutter from "../assets/flutter.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import php from "../assets/php.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import css from "../assets/css.png";
import sass from "../assets/sass.png";
import mysql from "../assets/mysql.png";
import mongo from "../assets/mongodb.png";
export const Skills = () => {
  return (
    <div className="tech-section main" id="skills">
      <h3 className="tech-title">Skills</h3>
      <div className="tech">
        <div className="item">
          <img src={flutter} alt="flutter" />
        </div>
        <div className="item">
          <img src={react} alt="flutter" />
        </div>
        <div className="item">
          <img src={sass} alt="flutter" />
        </div>
        <div className="item">
          <img src={css} alt="flutter" />
        </div>
        <div className="item">
          <img src={js} alt="flutter" />
        </div>
        <div className="item">
          <img src={html} alt="flutter" />
        </div>
        <div className="item">
          <img src={node} alt="flutter" />
        </div>
        <div className="item">
          <img src={mongo} alt="flutter" />
        </div>
        <div className="item">
          <img src={php} alt="flutter" />
        </div>
        <div className="item">
          <img src={mysql} alt="flutter" />
        </div>
      </div>
    </div>
  );
};
