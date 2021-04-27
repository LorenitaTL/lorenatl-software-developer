import React from "react";
import { ProjectCard } from "./ProjectCard";
import p1 from "../assets/project-1.jpg";
import p2 from "../assets/project-2.png";
import p3 from "../assets/project-3.jpg";
import p4 from "../assets/project-4.jpg";

export const MyProjects = () => {
  return (
    <div className="my-projects" id="my-projects">
      <h2 className="subtitle">Mis Proyectos</h2>
      <div className="projects main">
        <ProjectCard
          img={p1}
          title={"CRUD React - PHP - MySQL"}
          description={
            "Ut esse quis quis sit Lorem dolore proident officia culpa laboris. Commodo occaecat ullamco adipisicing qui ullamco voluptate aliquip exercitation."
          }
          tags={"Flutter"}
        />
        <ProjectCard
          img={p2}
          title={"CRUD React - Node js - MongoDB"}
          description={
            "Ut esse quis quis sit Lorem dolore proident officia culpa laboris. Commodo occaecat ullamco adipisicing qui ullamco voluptate aliquip exercitation."
          }
          tags={"Flutter"}
        />
        <ProjectCard
          img={p3}
          title={"Vehicles"}
          description={
            "Ut esse quis quis sit Lorem dolore proident officia culpa laboris. Commodo occaecat ullamco adipisicing qui ullamco voluptate aliquip exercitation."
          }
          tags={"Flutter"}
        />
        <ProjectCard
          img={p4}
          title={"Movie List"}
          description={
            "Ut esse quis quis sit Lorem dolore proident officia culpa laboris. Commodo occaecat ullamco adipisicing qui ullamco voluptate aliquip exercitation."
          }
          tags={"Flutter"}
        />
        <ProjectCard
          img={p4}
          title={"Giphy search"}
          description={
            "Ut esse quis quis sit Lorem dolore proident officia culpa laboris. Commodo occaecat ullamco adipisicing qui ullamco voluptate aliquip exercitation."
          }
          tags={"Flutter"}
        />
        <ProjectCard
          img={p1}
          title={"Crud Flutter - Implementar gráficas"}
          description={
            "Ut esse quis quis sit Lorem dolore proident officia culpa laboris. Commodo occaecat ullamco adipisicing qui ullamco voluptate aliquip exercitation."
          }
          tags={"Flutter"}
        />
        <ProjectCard
          img={p2}
          title={"Maps - Flutter"}
          description={
            "Ut esse quis quis sit Lorem dolore proident officia culpa laboris. Commodo occaecat ullamco adipisicing qui ullamco voluptate aliquip exercitation."
          }
          tags={"Flutter"}
        />
        <ProjectCard
          img={p3}
          title={"Event calendar Flutter-React-Firebase"}
          description={
            "Ut esse quis quis sit Lorem dolore proident officia culpa laboris. Commodo occaecat ullamco adipisicing qui ullamco voluptate aliquip exercitation."
          }
          tags={"Flutter"}
        />
        <ProjectCard
          img={p4}
          title={"BBB Design"}
          description={
            "Ut esse quis quis sit Lorem dolore proident officia culpa laboris. Commodo occaecat ullamco adipisicing qui ullamco voluptate aliquip exercitation."
          }
          tags={"Flutter"}
        />
      </div>
    </div>
  );
};
