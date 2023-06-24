import React from 'react'
import { socialLinks } from '../../data'
import SocialLink from './SocialLink'

const SocialLinks = (props) => {
  return (
    <ul className={props.parentClass}>
        {socialLinks.map((icon) => {
            return (
                <SocialLink key={icon.id} href={icon.url} icon={icon.icon} itemClass={props.itemClass}/>
            )
        })}
    </ul>
  )
}

export default SocialLinks