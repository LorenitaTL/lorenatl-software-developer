import React from "react";

export const ProjectCard = (props) => {
  const tags = [];
  props.tags.forEach((tag, index) => tags.push(<div key={index} className="tag">{tag}</div>));
  
  return (
    <div className="project">
      <div>
        <img src={props.img} alt="p1" />
      </div>
      <div className="content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="tags">{tags}</div>
        {/* <h2>{""}<i className="fab fa-github" aria-hidden="true"></i></h2> */}
        {props.children}
      </div>
    </div>
  );
};
