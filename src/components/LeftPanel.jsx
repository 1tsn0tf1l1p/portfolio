import React from 'react';
import '../styles/LeftPanel.css';
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import profileImage from '../assets/profile.png';

const LeftPanel = () => {
    return (
        <div className="left-panel">
            <img src={profileImage} alt="Filip Cobanin" className="profile-img" />
            <h1>Filip Čobanin</h1>
            <h2>Campus Ambassador & Reddit Community Moderator @ JetBrains | Software Engineering student @ RAF</h2>
            <p className="bio">
                Passionate about building robust backend systems and crafting seamless mobile experiences. Always experimenting with new tools to connect powerful backends with user-friendly apps.</p>
            <div className="contact-info">
                <p><FiMail className="icon" /> filipcobanin@icloud.com</p>
                <p><FiMapPin className="icon" /> Belgrade, RS</p>
            </div>
            <div className="social-links">
                <a href="https://github.com/1tsn0tf1l1p" target="_blank" rel="noopener noreferrer">
                    <FiGithub className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/filipcobanin/" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin className="social-icon" />
                </a>
            </div>
        </div>
    );
};

export default LeftPanel;