import React, { useEffect, useState } from "react";
import { projects } from "../../../data";
import Project from "./Project";
import "./Projects.css";

const Projects = (props) => {
  const [category, setCategory] = useState("All");


  useEffect(() => {
    setCategory(props.category);
  }, [props.category]);

  const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };

  console.log(isTouchDevice());

  return (
    <section className="section projects">
      {/* <!-- section title --> */}
      <div className="section-title section-center" >
        <h2>
          Design <span className="hero-piotr">Portfolio</span>
        </h2>
        <div className="underline"></div>
        <p className="projects-text"></p>
        <div className="categories section-center">
          <div onClick={() => setCategory("All")}>
            <h2>All</h2>
            {category === "All" && <div className="underline-2"></div>}
          </div>
          <div onClick={() => setCategory("Games")}>
            <h2>Games</h2>
            {category === "Games" && <div className="underline-2"></div>}
          </div>
          <div onClick={() => setCategory("Software")}>
            <h2>Software</h2>
            {category === "Software" && <div className="underline-2"></div>}
          </div>
          <div onClick={() => setCategory("Arch")}>
            <h2>Arch</h2>
            {category === "Arch" && <div className="underline-2"></div>}
          </div>
        </div>
      </div>

      <div className="projects-center section-center">
        {projects
          .filter((project) => {
            if (category === "All") {
              return true;
            } else {
              return project.category === category;
            }
          })
          .map((project, index) => {
            return (
              <Project
                class={"project-" + (index+1)}
                key={project.id}
                image={project.image}
                title={project.title}
                info={project.info}
                url={project.url}
                category={project.category}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Projects;
