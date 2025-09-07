import React from 'react';
import '../styles/Skills.css';

const Skills = ({ skills }) => {
    return (
        <section className="skills-section">
            <h3>Core Skills</h3>
            <div className="skills-grid">
                {skills.map((category, index) => (
                    <div key={index} className="skill-category">
                        <h4>{category.title}</h4>
                        <div className="tags">
                            {category.tags.map((tag, tagIndex) => (
                                <span key={tagIndex}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;