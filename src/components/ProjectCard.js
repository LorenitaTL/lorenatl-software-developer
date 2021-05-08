import React from "react";

export const ProjectCard = (props) => {
  const tags = [];
  props.tags.forEach((tag, index) =>
    tags.push(
      <div key={index} className="tag">
        {tag}
      </div>
    )
  );

  return (
    <div className="project">
      <div>
        <img src={props.img} alt="p1" />
      </div>
      <div className="content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="tags">{tags}</div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {props.front ? (
            <a href={props.front} target="_blank" rel="noreferrer">
              <p>
                Frontend
                <i className="fab fa-github" aria-hidden="true"></i>
              </p>
            </a>
          ) : null}
          {props.back ? (
            <a href={props.back} target="_blank" rel="noreferrer">
              <p>
                Backend
                <i className="fab fa-github" aria-hidden="true"></i>
              </p>
            </a>
          ) : null}
        </div>

        {props.children}
      </div>
    </div>
  );
};
