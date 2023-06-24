import React from "react";

const SocialLink = (props) => {
  return (
    <li>
      <a
        href={props.href}
        target="_blank"
        rel="noreferrer"
        className={props.itemClass}
      >
        {props.icon}
      </a>
    </li>
  );
};

export default SocialLink;
