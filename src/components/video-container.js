import React from 'react'
import PropTypes from 'prop-types'
import WorkContainerStyles from '../../styles/work-container.module.css'

export const VideoContainer = ({ projectId, heading, technologies, reversed }) => {
  const containerClasses = `${WorkContainerStyles["container"]} ${reversed ? WorkContainerStyles["container-reverse"] : WorkContainerStyles["container-forward"]}`
  
  return (
    <div className={containerClasses} id={projectId}>
      <div className={WorkContainerStyles["text-container"]}>
        <div>
          <h2>{heading}</h2>
          <p>{technologies}</p>
        </div>
      </div>
      <div className={WorkContainerStyles["video-container"]}>
        <video className={WorkContainerStyles["video-content"]} loop autoPlay>
            <source src="https://morganfeir.s3.us-east-2.amazonaws.com/portfolio/articulate-360.mp4" tyle="video/mp4" />
        </video>
      </div>
    </div>
  )
}

VideoContainer.propTypes = {
  projectId: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  reversed: PropTypes.bool
}

VideoContainer.defaultProps = {
  reversed: false
}