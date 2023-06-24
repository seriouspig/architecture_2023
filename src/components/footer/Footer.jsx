import React from "react";
import PageLinks from "../links/PageLinks";
import SocialLinks from "../links/SocialLinks";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes["footer-container"]}>
    <footer className={classes[("section", "footer")]}>

        <p className={classes.copyright}>
          Piotr Gryko &copy;
          <span id="date">{new Date().getFullYear()}</span>
        </p>
        <PageLinks
          parentClass={classes["footer-links"]}
          itemClass={classes["footer-link"]}
        />
        <SocialLinks
          parentClass={classes["footer-icons"]}
          itemClass={classes["footer-icon"]}
        />

    </footer>
    </div>
  );
};

export default Footer;
