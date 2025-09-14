import React from 'react';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import '../styles/RightPanel.css';
import kimba1 from '../assets/kimba1.png';
import kimba2 from '../assets/kimba2.png';
import kimba3 from '../assets/kimba3.png';
import pycharmplugin from '../assets/pycharmplugin.png';

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
        title: 'Campus Ambassador at Union University',
        company: 'JetBrains',
        description: 'Coordinating JetBrains’ participation in campus career events, conducting student meetups, workshops, Q&A sessions and promoting internship opportunities.',
        date: ' November 2024 - Present',
    },
];

const projectsData = [
    {
        title: 'Kimba Android App',
        subtitle: 'A Compose-powered Android app that onboards wearables and a smart scent diffuser, then visualizes sleep insights and lets users schedule and control multi‑capsule scents.',
        tags: ['Android', 'Kotlin', 'Jetpack Compose'],
        description: 'A modular starter for quickly spinning up production-ready REST APIs.',
        longDescription: 'This Android application is the companion app for Kimba, a smart sleep system that uses a scent diffuser and biometric data from wearables to improve sleep quality. The app onboards your wearables and the Kimba smart scent diffuser, then visualizes your sleep insights. It also allows you to schedule and control the multi-capsule scents.\n' +
            '\n' +
            'In this project, I had the opportunity to dive deep into `Android development` and the modern Android development toolkit. I learned how to build a complex user interface using `Jetpack Compose`, creating a smooth and intuitive user experience for the onboarding process and the sleep data visualization. I also gained hands-on experience with the fundamentals of `Android app architecture`, including managing user data, handling device connectivity, and building a responsive and performant application. This project was a great learning experience that solidified my understanding of mobile development and the `Android ecosystem`.',
        images: [kimba1, kimba2, kimba3],
        links: [
            { href: 'https://kimba.ai', label: 'Kimba website' },
        ],
    },
    {
        title: 'PyCharm Variable Type Plugin',
        subtitle: 'IntelliJ Platform plugin for PyCharm used for identifying the variable type from the caret placement.',
        tags: ['Java', 'PyCharm', 'IntelliJ Plugin Development'],
        description: 'Plugin that shows the type of the variable that is under the caret.',
        longDescription: 'This is a simple plugin for PyCharm that I developed to better understand the IntelliJ Platform. It adds a widget to the IDE\'s status bar that displays the inferred type of the Python variable currently under the cursor. As you move the caret, the widget updates in real-time, showing types like `int, str`, or more complex ones like `list[str]`.\n' +
            '\n' +
            'I created this as a personal learning project during my Flask support internship at JetBrains. My goal was to explore the IntelliJ Platform SDK. Through this project, I learned how to navigate the `Python PSI (Program Structure Interface)` to find variable declarations from a caret position. I then used the `TypeEvalContext` to query the IDE\'s powerful type inference engine. I also gained practical experience in creating and managing UI components like status bar widgets, handling editor and caret events, and correctly configuring a plugin\'s dependencies and compatibility using Gradle and the `plugin.xml` file.',
        images: [pycharmplugin],
    },
];

const RightPanel = () => {
    return (
        <div className="right-panel">
            <Skills skills={skillsData} />
            <Experience experiences={experienceData} />
            <Projects projects={projectsData} />
        </div>
    );
};

export default RightPanel;