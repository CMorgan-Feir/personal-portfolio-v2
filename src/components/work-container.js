import React from 'react';
import PropTypes from 'prop-types';
import WorkContainerStyles from '../../styles/work-container.module.css';

export const WorkContainer = ({
  projectId, heading, technologies, url, reversed,
}) => {
  const containerClasses = `${WorkContainerStyles.container} ${reversed ? WorkContainerStyles['container-reverse'] : WorkContainerStyles['container-forward']}`;

  return (
    <div className={containerClasses} id={projectId}>
      <div className={WorkContainerStyles['text-container']}>
        <div>
          <h2>{heading}</h2>
          <p>{technologies}</p>
        </div>
      </div>
      <div className={WorkContainerStyles['image-container']}>
        <img className={WorkContainerStyles.image} src={url} />
      </div>
    </div>
  );
};

WorkContainer.propTypes = {
  projectId: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  reversed: PropTypes.bool,
};

WorkContainer.defaultProps = {
  reversed: false,
};
