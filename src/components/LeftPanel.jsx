import React from 'react';
import '../styles/LeftPanel.css';
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import profileImage from '../assets/profile.png';

const LeftPanel = () => {
    return (
        <div className="left-panel">
            <img src={profileImage} alt="John Doe" className="profile-img" />
            <h1>John Doe</h1>
            <h2>Senior Software Engineer</h2>
            <p className="bio">
                15+ years building scalable systems and leading engineering teams.
            </p>
            <div className="contact-info">
                <p><FiMail className="icon" /> john.doe@example.com</p>
                <p><FiMapPin className="icon" /> San Francisco, CA</p>
            </div>
            <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FiGithub className="social-icon" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin className="social-icon" />
                </a>
            </div>
        </div>
    );
};

export default LeftPanel;