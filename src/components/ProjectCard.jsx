import React from 'react';
import '../styles/Projects.css';

const ProjectCard = ({ title, subtitle, tags = [], onClick }) => {
  return (
    <button className="project-card" onClick={onClick} aria-haspopup="dialog">
      <div className="project-card-body">
        <h4 className="project-title">{title}</h4>
        {subtitle ? <p className="project-subtitle">{subtitle}</p> : null}
        {tags.length > 0 && (
          <div className="project-tags">
            {tags.map((t, i) => (
              <span key={i} className="project-tag">{t}</span>
            ))}
          </div>
        )}
      </div>
    </button>
  );
};

export default ProjectCard;
