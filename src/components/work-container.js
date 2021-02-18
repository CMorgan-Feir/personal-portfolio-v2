import React, { useState } from 'react'
import WorkContainerStyles from '../../styles/work-container.module.css'
import Link from 'next/link'

export const WorkContainer = ({ projectId, heading, technologies, url, reversed }) => {
  const containerClasses = `${WorkContainerStyles["container"]} ${reversed ? WorkContainerStyles["container-reverse"] : WorkContainerStyles["container-forward"]}`
  
  return (
    <div className={containerClasses} id={projectId}>
      <div className={WorkContainerStyles["text-container"]}>
        <div>
          <h2>{heading}</h2>
          <p>{technologies}</p>
        </div>
      </div>
      <div className={WorkContainerStyles["image-container"]}>
        <img className={WorkContainerStyles["image"]} src={url} />
      </div>
    </div>
  )
}

WorkContainer.defaultProps = {
  reversed: false
}