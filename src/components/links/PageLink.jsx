import React from 'react'

const PageLink = (props) => {
  return (
    <li>
      <a href={props.href} className={props.itemClass}>
        {props.text}
      </a>
    </li>
  );
}

export default PageLink