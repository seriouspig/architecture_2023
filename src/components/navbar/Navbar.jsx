import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { pageLinks, socialLinks } from "../../data";
import logo from "../../assets/logos/logo_piotr.svg";
import classes from "./Navbar.module.css"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);



  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <div className={classes["nav-container"]}>
      <nav>
        <div className={classes["nav-center"]}>
          <div className={classes["nav-header"]}>
            <div className={classes["logo-container"]}>
              <img src={logo} className={classes.logo} alt="logo" />

            </div>
            <button className={classes["nav-toggle"]} onClick={toggleLinks}>
              {showLinks ? <FaWindowClose /> : <FaBars />}
            </button>
          </div>
          <div className={classes["links-container"]} ref={linksContainerRef}>
            <ul className={classes.links} ref={linksRef}>
              {pageLinks.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className={classes["social-icons"]}>
            {socialLinks.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url} target="_blank">{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
