import React from "react";

export const CardAbMe = (props) => {
  return (
    <div className="flip-card card">
      <div className="flip-card-inner ">
        <div
          className="flip-card-front shadow-card card-front"
          style={{ padding: "1rem" }}
        >
          <img src={props.img} alt="about" />
          <h2>{props.title} <i className="fa fa-arrow-circle-right" aria-hidden="true"></i> </h2>
        </div>
        <div className="flip-card-back shadow-card card-back">
          <img src={props.icon} alt="icon" style={{ height: "5rem" }} />
          {props.description.split(".").map((i, index) => (
            <p key={index}>{i}.</p>
          ))}
        </div>
      </div>
    </div>
  );
};
