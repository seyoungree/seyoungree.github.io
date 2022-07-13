import React from 'react';
import './ProjectCard.css';

export default function ProjectCard(props) {
    return (
        <div className="card1">
            <div className="content">
                <div className="front">
                    <h3 className="title">{props.title}</h3>
                    <p className="subtitle">Hover me!</p>
                </div>

                <div className="back">
                    <p className="description">{props.description} </p>
                </div>
                
            </div>
        </div>);
}