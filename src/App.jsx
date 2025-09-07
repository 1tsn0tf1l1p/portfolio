import React from 'react';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import './App.css';

function App() {
    return (
        <div className="app-container">
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