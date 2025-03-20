import React from 'react';
import '../index.css';

const Project = ({ image, title, deployedLink, githubLink }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* Only show the "View Deployed" button if deployedLink exists */}
          {deployedLink && deployedLink !== "" && (
            <a href={deployedLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              View Deployed
            </a>
          )}
          <a href={githubLink} className="btn btn-primary ml-2" target="_blank" rel="noopener noreferrer">
            View GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
