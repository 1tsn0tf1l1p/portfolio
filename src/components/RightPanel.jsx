import React from 'react';
import Experience from './Experience';
import Skills from './Skills';
import '../styles/RightPanel.css';

const skillsData = [
    {
        title: 'Languages',
        tags: ['Java', 'Kotlin', 'Python', 'C'],
    },
    {
        title: 'Backend',
        tags: ['Spring Boot', 'PostgreSQL', 'MySQL', 'MongoDB',  ],
    },
    {
        title: 'Cloud',
        tags: ['Kubernetes', 'Docker', 'GCS'],
    },
];

const experienceData = [
    {
        title: 'Reddit Community Moderator',
        company: 'JetBrains',
        description: 'Supported JetBrains’ presence on Reddit by engaging with developer communities, sharing helpful insights about JetBrains tools, and fostering authentic conversations.',
        date: 'September 2025 - Present',
    },
    {
        title: 'Campus Ambassador @ Union University',
        company: 'JetBrains',
        description: 'Coordinating JetBrains’ participation in campus career events, conducting student meetups, workshops, Q&A sessions and promoting internship opportunities.',
        date: ' November 2024 - Present',
    },
];

const RightPanel = () => {
    return (
        <div className="right-panel">
            {}
            <Skills skills={skillsData} />

            <Experience experiences={experienceData} />
        </div>
    );
};

export default RightPanel;