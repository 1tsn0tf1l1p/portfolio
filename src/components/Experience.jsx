import React from 'react';
import '../styles/Experience.css';

function renderInline(text) {
    const parts = String(text).split(/(`[^`]+`)/g);
    return parts.map((part, i) => {
        if (part.startsWith('`') && part.endsWith('`')) {
            const content = part.slice(1, -1);
            return <code key={i} className="inline-code">{content}</code>;
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
    });
}

const TimelineItem = ({ title, company, description, date }) => (
    <div className="timeline-item">
        <div className="timeline-content">
            <h4>{title}</h4>
            <p className="company">{company}</p>
            <p className="description">{renderInline(description)}</p>
        </div>
        <div className="timeline-date">{date}</div>
    </div>
);

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