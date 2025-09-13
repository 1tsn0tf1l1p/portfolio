import React from 'react';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <ThemeToggle />
            <div className="left-column">
                <LeftPanel />
            </div>
            <div className="right-column">
                <RightPanel />
            </div>
        </div>
    );
}

export default App;