import React, { useState } from 'react'
import { BiLinkExternal } from "react-icons/bi";
import "./Project.css"

const Project = (props) => {
    const [isActive, setIsActive] = useState(false);

        const handleClick = (event) => {
            console.log("Is active is: " + isActive);
            setIsActive(current => !current)
            props.setGalleryMode()
            
        }

  return (
    <div className={props.class}>
      <article className="project">
        <img src={props.image} className="project-img" alt=""/>
        <div className="project-info">
          <h4>{props.title}</h4>
          <p>{props.info}</p>
          <a
            className="btn btn-live"
            onClick={handleClick}
            // href={props.url}
            target="_blank"
            rel="noreferrer"
          >
            <BiLinkExternal /> &nbsp; View Project
          </a>
        </div>
      </article>
    </div>
  );
}

export default Project