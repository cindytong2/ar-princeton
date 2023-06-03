import React from 'react'

import PropTypes from 'prop-types'

import './alumni-card.css'

const AlumniCard = (props) => {
  return (
    <div className={`alumni-card-speaker-card ${props.rootClassName} `}>
      <span className="alumni-card-first-name">{props.firstName}</span>
      <span className="alumni-card-text">{props.role}</span>
    </div>
  )
}

AlumniCard.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=200',
  firstName: 'Jonathan',
  role: 'brand manager @ pepsi',
}

AlumniCard.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  firstName: PropTypes.string,
  role: PropTypes.string,
}

export default AlumniCard
