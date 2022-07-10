import React from 'react';
import './ProjectCard.css';

export default function ProjectCard() {
    return (
        <div className="card1">
            <div className="content">
                <div className="front">
                    <h3 className="title">Hey</h3>
                    <p className="subtitle">Hover me :)</p>
                </div>

                <div className="back">
                    <p className="description">
                        Cool description so you can read it too my friend
                    </p>
                </div>
                
            </div>
        </div>);
}