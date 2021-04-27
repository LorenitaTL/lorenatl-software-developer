import React from "react";

export const ProjectCard = (props) => {
  return (
    <div className="project">
      <div>
        <img src={props.img} alt="p1" />
      </div>
      <div className="content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="tags">
          <div className="tag">{props.tags}</div>
          <div className="tag">{props.tags}</div>
        </div>
        <h4>Show More</h4>
      </div>
    </div>
  );
};
