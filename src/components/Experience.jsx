import React from 'react';
import '../styles/Experience.css';

// A small sub-component to render a single timeline item.
const TimelineItem = ({ title, company, description, date }) => (
    <div className="timeline-item">
        <div className="timeline-content">
            <h4>{title}</h4>
            <p className="company">{company}</p>
            <p className="description">{description}</p>
        </div>
        <div className="timeline-date">{date}</div>
    </div>
);

// The main Experience component
const Experience = ({ experiences }) => {
    return (
        <section className="experience-section">
            <h3>Experience</h3>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <TimelineItem
                        key={index}
                        title={exp.title}
                        company={exp.company}
                        description={exp.description}
                        date={exp.date}
                    />
                ))}
            </div>
        </section>
    );
};

export default Experience;