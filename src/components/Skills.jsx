import React from 'react';
import '../styles/Skills.css';
import {
  SiKotlin,
  SiPython,
  SiC,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiKubernetes,
  SiDocker,
  SiGooglecloud,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const ICONS = {
  java: FaJava,
  kotlin: SiKotlin,
  python: SiPython,
  c: SiC,
  'spring boot': SiSpringboot,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  kubernetes: SiKubernetes,
  docker: SiDocker,
  gcs: SiGooglecloud,
  'google cloud': SiGooglecloud,
  'google cloud storage': SiGooglecloud,
};

function getIconFor(tag) {
  const key = String(tag).trim().toLowerCase();
  return ICONS[key] || null;
}

const Skills = ({ skills }) => {
  return (
    <section className="skills-section">
      <h3>Core Skills</h3>
      <div className="skills-grid">
        {skills.map((category, index) => (
          <div key={index} className="skill-category">
            <h4>{category.title}</h4>
            <div className="tags">
              {category.tags.map((tag, tagIndex) => {
                const Icon = getIconFor(tag);
                return (
                  <span key={tagIndex}>
                    {Icon ? <Icon className="skill-icon" aria-hidden="true" focusable="false" /> : null}
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;