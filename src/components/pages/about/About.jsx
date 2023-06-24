import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool } from "react-icons/md";
import { FaKeyboard } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import Title from '../../Title';
import Skills from './Skills'

const About = () => {
  return (
    <>
      <Skills />
      <Title title="Professional history" />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fff",
            color: "black",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
          }}
          contentArrowStyle={{ borderRight: "9px solid  #fff" }}
          date="September 2021 - present"
          dateClassName="date-right"
          iconStyle={{ background: "#299147", color: "#fff" }}
          icon={<FaKeyboard />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bluebox Aviation, Dunfermline
          </h4>
          <p>
            Assisting in developmentof cutting-edge inflight enterntainemnt
            systems for airlines across the globe. Expanding my knowledge of
            backend development using Bash, PHP and Node.js
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fff",
            color: "black",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
          }}
          contentArrowStyle={{ borderRight: "9px solid  #fff" }}
          date="February 2021 - June 2021"
          iconStyle={{ background: "#009DE1", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Development Student
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            CodeClan, Edinburgh
          </h4>
          <p>
            Joined an intense and immersive Professional Software Development
            Course. Worked on various solo and team projects
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fff",
            color: "black",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
          }}
          contentArrowStyle={{ borderRight: "9px solid  #fff" }}
          date="2017 - 2018"
          dateClassName="date-right"
          iconStyle={{ background: "#009DE1", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Computer Games Development Student
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Edinburgh College, Edinburgh
          </h4>
          <p>
            Completed one year Higher National Certificate course in Computer
            Games Development including Programming Fundamentals (C#)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fff",
            color: "black",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
          }}
          contentArrowStyle={{ borderRight: "9px solid  #fff" }}
          date="September 2017 - September 2021"
          iconStyle={{ background: "#9D2424", color: "#fff" }}
          icon={<BsBuilding />}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Architectural Designer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            10Design, Edinburgh
          </h4>
          <p>
            Leading teams of architects and designers to deliver concept,
            preliminary and detailed design for various size and use projects in
            Middle East and Asia
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fff",
            color: "black",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
          }}
          contentArrowStyle={{ borderRight: "9px solid  #fff" }}
          date="2014 - 2017"
          dateClassName="date-right"
          iconStyle={{ background: "#9D2424", color: "#fff" }}
          icon={<BsBuilding />}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Associate Architectural Designer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            JAE JIANG ARCHITECTS & ENGINEERS, Shanghai
          </h4>
          <p>
            Leading a team of junior staff. Working on competitions and concept
            design for various size and use projects in China. Creating 3d
            models, visualizations and presentations
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fff",
            color: "black",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
          }}
          contentArrowStyle={{ borderRight: "9px solid  #fff" }}
          date="2012 - 2014"
          iconStyle={{ background: "#9D2424", color: "#fff" }}
          icon={<BsBuilding />}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Architectural Designer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            B+H Architects, Shanghai
          </h4>
          <p>
            Working on competitions and concept design for various size and use
            projects in China and Singapore. Creating 3d models, visualizations
            and presentations
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fff",
            color: "black",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
          }}
          contentArrowStyle={{ borderRight: "9px solid  #fff" }}
          date="2005 - 2011"
          dateClassName="date-right"
          iconStyle={{ background: "#9D2424", color: "#fff" }}
          icon={<BsBuilding />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior / Intermediate Architect
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Traynor O'Toole Architects, Dublin
          </h4>
          <p>
            Working on preliminary design and preparing planning applications.
            Working on various size masterplanning projects in Ireland
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fff",
            color: "black",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
          }}
          contentArrowStyle={{ borderRight: "9px solid  #fff" }}
          date="2003 - 2005"
          iconStyle={{ background: "#9D2424", color: "#fff" }}
          icon={<BsBuilding />}
        >
          <h3 className="vertical-timeline-element-title">3D Modeller</h3>
          <h4 className="vertical-timeline-element-subtitle">
            ARC Architectural Consultants, Dublin
          </h4>
          <p>
            Creating 3D models and visualizations for visual impact statements.
            Assisting in surveys of protected structures
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#fff",
            color: "black",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
          }}
          contentArrowStyle={{ borderRight: "9px solid  #fff" }}
          date="1998 - 2003"
          dateClassName="date-right"
          iconStyle={{ background: "#009DE1", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            M.Sc. Architectura and Urban Planning
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Technical Unversity of Poznan, Poznan
          </h4>
          <p>
            Completed five years M.Sc. Higher Education studies in the Faculty
            of Architecture and Urban Planning
          </p>
        </VerticalTimelineElement>


      </VerticalTimeline>
    </>
  );
}

export default About