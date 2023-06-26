import React, { useEffect, useState } from "react";
import { projects } from "../../../data";
import Project from "./Project";
import "./Projects.css";
import Gallery from "../../Gallery";

const Projects = (props) => {
  const [category, setCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [galleryMode, setGalleryMode] = useState(false);
  const [galleryImages, setGalleryImages] = useState([])

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

  const handleSelectedProject = (val) => {
    console.log("GETTING SELECTED PROJECT ID")
    console.log(val)

    let galleryImages = []

for (const project of projects) {
  if (project.title === val) {
    galleryImages = project.images;
    setGalleryImages(galleryImages)
    break; // Exit the loop since we found the project with ID 12
  }
}

    
  }

  return (
    <>
      {galleryMode && (
        <Gallery disableGalleryMode={() => setGalleryMode(false)} galleryImages={galleryImages} />
      )}
      <section className="section projects">
        {/* <!-- section title --> */}
        <div className="section-title section-center">
          <h2>
            Design <span className="hero-piotr">Portfolio</span>
          </h2>
          <div className="underline-3"></div>
          <p className="projects-text"></p>
          <div className="categories section-center">
            <div onClick={() => setCategory("All")}>
              <h2>All</h2>
              {category === "All" && <div className="underline-2"></div>}
            </div>
            <div onClick={() => setCategory("MLP")}>
              <h2>MLP</h2>
              {category === "MLP" && <div className="underline-2"></div>}
            </div>
            <div onClick={() => setCategory("Interior")}>
              <h2>Interior</h2>
              {category === "Interior" && <div className="underline-2"></div>}
            </div>
            <div onClick={() => setCategory("Facades")}>
              <h2>Facades</h2>
              {category === "Facades" && <div className="underline-2"></div>}
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
                  class={"project-" + (index + 1)}
                  key={project.id}
                  image={project.image}
                  title={project.title}
                  info={project.info}
                  url={project.url}
                  category={project.category}
                  setGalleryMode={() => setGalleryMode(true)}
                  setSelectedProject={(val) => handleSelectedProject(val)}
                />
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Projects;
