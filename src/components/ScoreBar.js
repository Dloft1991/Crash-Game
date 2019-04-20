import React from 'react';
import './components.css'

const ScoreBar = props => (
    <div className="scorebar">
        <nav className="navbar scorebar fixed-top navbar-light">
        <h1 className="display-4">Crash Bandicoot Clicky Game</h1>
            <div className="score-keeper">Score: {props.score}</div>
        </nav>
    </div>  
);
console.log(ScoreBar)
export default ScoreBar;