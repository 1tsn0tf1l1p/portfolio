import React from 'react';
import '../styles/RightPanel.css';

const RightPanel = () => {
    return (
        <div className="right-panel">
            <section className="skills-section">
                <h3>Core Skills</h3>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h4>Languages</h4>
                        <div className="tags">
                            <span>TypeScript</span>
                            <span>Python</span>
                            <span>Go</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h4>Backend</h4>
                        <div className="tags">
                            <span>Node.js</span>
                            <span>PostgreSQL</span>
                            <span>Redis</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h4>Cloud</h4>
                        <div className="tags">
                            <span>AWS</span>
                            <span>Kubernetes</span>
                            <span>Docker</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="experience-section">
                <h3>Experience</h3>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h4>Senior Software Engineer</h4>
                            <p className="company">Tech Corp</p>
                            <p className="description">
                                Led development of microservices architecture, 40% improvement in system performance.
                            </p>
                        </div>
                        <div className="timeline-date">2020 - Present</div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h4>Software Engineer</h4>
                            <p className="company">Innovation Labs</p>
                            <p className="description">
                                Architected cloud-native applications, mentored junior developers.
                            </p>
                        </div>
                        <div className="timeline-date">2017 - 2020</div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h4>Full Stack Developer</h4>
                            <p className="company">StartUp Inc</p>
                            <p className="description">
                                Built scalable web applications using React and Node.js.
                            </p>
                        </div>
                        <div className="timeline-date">2015 - 2017</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RightPanel;