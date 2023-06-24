import React from 'react'
import classes from './Title.module.css'

const Title = (props) => {
  return (
              
          <div className={classes["section-title"]}>
            <h2>{props.title}</h2>
            <div className={classes.underline}></div>
          </div>
  )
}

export default Title