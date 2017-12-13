import React from 'react';
import projectStyles from '../sass/projects.scss'

const ProjectImage = ({imgClass}) => {
  const classes = `${projectStyles[imgClass]} ${projectStyles.image}`
  return (
    <div className={projectStyles.imageContainer}>
      <div className={classes}></div>
    </div>
  );
}

export default ProjectImage;