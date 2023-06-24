import React, { useState } from "react";
import "./Home2.css";
import Type from "./Type";
import landingImage1 from "../../../assets/images/landing_page_3_final_2.png";
import tvStatic1 from "../../../assets/images/tv_static_1.gif";
import pcScreenSaver2 from "../../../assets/images/windows.gif";
import macScreenSaver3 from "../../../assets/images/mac.gif";
import tvGame1 from "../../../assets/images/projects/idefender.gif";
import macCoding3 from "../../../assets/images/coding2.gif";
import pcSketchup2 from "../../../assets/images/sketchup.gif";
import SocialLinks from "../../links/SocialLinks";
import { useNavigate } from "react-router-dom";
import { isIOS, isMobile } from "react-device-detect";

const Home = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);

  let navigate = useNavigate();

  const handleClick = (screen) => {
    // e.preventDefault();
    if (isIOS) {
      console.log("this device is mobile");
      if (screen === "screen-1") {
        if (isShown) {
          let path = "/portfolio";
          isShown && navigate(path);

          props.changeCategory("Games");
        } else {
          setIsShown(true);
        }
      } else if (screen === "screen-2") {
        if (isShown2) {
          let path = "/portfolio";
          isShown2 && navigate(path);
          props.changeCategory("Arch");
        } else {
          setIsShown2(true);
        }
      } else if (screen === "screen-3") {
        if (isShown3) {
          let path = "/portfolio";
          isShown3 && navigate(path);
          props.changeCategory("Software");
        } else {
          setIsShown3(true);
        }
      }
    } else {
      if (screen === "screen-1") {
        isShown && console.log("The link was clicked.");
        setIsShown(true);

        props.changeCategory("Games");

        let path = "/portfolio";
        isShown && navigate(path);
      } else if (screen === "screen-2") {
        isShown2 && console.log("The link was clicked.");
        setIsShown2(true);

        props.changeCategory("Arch");

        let path = "/portfolio";
        isShown2 && navigate(path);
      } else if (screen === "screen-3") {
        isShown3 && console.log("The link was clicked.");
        setIsShown3(true);

        props.changeCategory("Software");

        let path = "/portfolio";
        isShown3 && navigate(path);
      }
    }
  };

  const handleMouseEnter = (e) => {
    e.preventDefault();
    if (!isMobile) {
      console.log("Mouse entered");
      setIsShown(true);
    }
  };

  return (
    <>
      <div className="section-center hero-center">
        <article className="hero-img">
          <div
            className="selector-screen-1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsShown(false)}
            onClick={() => handleClick("screen-1")}
          ></div>

          <div className="static-container">
            <img className="static_1" src={tvStatic1} alt="" />
          </div>
          {isShown && (
            <div className="static-container active">
              <img className="static_1 game_1" src={tvGame1} alt="" />
            </div>
          )}
          <div
            className="selector-screen-2"
            onMouseEnter={() => setIsShown2(true)}
            onMouseLeave={() => setIsShown2(false)}
            onClick={() => handleClick("screen-2")}
          ></div>
          <div className="static-container-2">
            <img className="static_2" src={pcScreenSaver2} alt="" />
          </div>
          {isShown2 && (
            <div className="static-container-2 active">
              <img className="static_2 sketchup_2" src={pcSketchup2} alt="" />
            </div>
          )}
          <div
            className="selector-screen-3"
            onMouseEnter={() => setIsShown3(true)}
            onMouseLeave={() => setIsShown3(false)}
            onClick={() => handleClick("screen-3")}
          ></div>

          <div className="static-container-3">
            <img className="static_3" src={macScreenSaver3} alt="" />
          </div>

          {isShown3 && (
            <div className="static-container-3 active">
              <img className="static_3 coding_3" src={macCoding3} alt="" />
            </div>
          )}
          <img src={landingImage1} className="hero-photo" alt="john doe" />
        </article>
        <article className="hero-info">
          <div className="underline"></div>
          <h1>
            Hello, I'm <span className="hero-piotr">Piotr</span>
          </h1>
          <Type />
          <a className="email" href="mailto: pigryko@yahoo.com">
            pigryko@yahoo.com
          </a>
          <a href="mailto: pigryko@yahoo.com" className="btn hero-btn">
            email me
          </a>
          <SocialLinks parentClass={"social-icons"} itemClass={"social-icon"} />
        </article>
        {/* <article class="contact-form">
          <h3>contact me</h3>
          <form action="https://formsubmit.co/pigryko@yahoo.com" method="POST">
            <div class="form-group">
              <input
                type="text"
                placeholder="name"
                class="form-control"
                name="firstName"
              />
              <input
                type="email"
                placeholder="email"
                class="form-control"
                name="email"
              />
              <textarea
                name="message"
                placeholder="message"
                class="form-control"
                rows="5"
              ></textarea>
            </div>
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/"
            ></input>
            <input type="hidden" name="_captcha" value="false"/>
            <button type="submit" class="submit-btn btn">
              submit here
            </button>
          </form>
        </article> */}
      </div>
    </>
  );
};

export default Home;
