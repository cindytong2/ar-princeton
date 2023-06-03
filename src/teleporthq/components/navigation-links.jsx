import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <a href="#projects" className="navigation-links-link">
        {props.text}
      </a>
      <a href="#team" className="navigation-links-link1">
        {props.text1}
      </a>
      <span className="navigation-links-text">{props.text2}</span>
      <span className="navigation-links-text1">{props.text3}</span>
      <span className="navigation-links-text2">{props.text4}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text4: '',
  text1: 'Team',
  rootClassName: '',
  text2: '',
  text3: '',
  text: 'Projects',
}

NavigationLinks.propTypes = {
  text4: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks
