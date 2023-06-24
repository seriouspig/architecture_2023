import React from "react";
import "./Skills.css";
import Title from "../../Title";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section className="section skills">
      <Title title="skills" />
      <div className="section-center skills-center">
        <article>
          <h3>frontend</h3>
          <Skill name="HTML/CSS" percentage="80%" />
          <Skill name="Javascript" percentage="70%" />
          <Skill name="react" percentage="50%" />
          <Skill name="illustrator / photoshop" percentage="85%" />
          <Skill name="3d modelling" percentage="95%" />

          <div className="scale-bar">
            <span className="skill-level">Noob</span>
            <span className="skill-level">Learning</span>
            <span className="skill-level">Confident</span>
            <span className="skill-level">Pretty Good</span>
            <span className="skill-level last">Master</span>
          </div>
        </article>
        <article>
          <h3>backend</h3>
          <Skill name="Node" percentage="60%" />
          <Skill name="PHP" percentage="30%" />
          <Skill name="Python" percentage="40%" />
          <Skill name="MySQL" percentage="55%" />
          <Skill name="Bash" percentage="50%" />
          <div className="scale-bar">
            <span className="skill-level">Noob</span>
            <span className="skill-level">Learning</span>
            <span className="skill-level">Confident</span>
            <span className="skill-level">Pretty Good</span>
            <span className="skill-level last">Master</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Skills;
