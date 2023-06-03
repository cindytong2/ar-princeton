import React from 'react'

import PropTypes from 'prop-types'

import './team-card.css'

const TeamCard = (props) => {
  return (
    <div className="team-card-speaker-card">
      <div className="team-card-image-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="team-card-image"
        />
        <div className="team-card-read-more-container">
          <span className="team-card-hint">read more</span>
          <svg viewBox="0 0 1024 1024" className="team-card-icon">
            <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
          </svg>
        </div>
      </div>
      <span className="team-card-first-name">{props.firstName}</span>
      <span className="team-card-text">{props.role}</span>
    </div>
  )
}

TeamCard.defaultProps = {
  firstName: 'Jonathan',
  image_src:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=200',
  lastName: 'carey',
  role: 'brand manager @ pepsi',
  image_alt: 'image',
}

TeamCard.propTypes = {
  firstName: PropTypes.string,
  image_src: PropTypes.string,
  lastName: PropTypes.string,
  role: PropTypes.string,
  image_alt: PropTypes.string,
}

export default TeamCard
