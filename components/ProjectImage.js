import React from 'react';
import PropTypes from 'prop-types';

const ProjectImage = ({ imgUrl }) => {
  return (
    <div>
      <div className="imageContainer">
        <div className="project-image" />
      </div>
      <style jsx>{`
        .project-image {
          background-image: url('${imgUrl}');
          width: 100%;
          padding: 0 0 45% 0;
          background-size: 100% auto;
        }
      `}</style>
    </div>
  );
};

ProjectImage.propTypes = {
  imgUrl: PropTypes.string,
};

export default ProjectImage;
