import React from 'react';
import SkillList from './SkillList';
import "../styles/SkillCard.css";

function SkillCard({title, image, skills, alt}) {
    return (
        <div className="skill-card">
            <h3 className="card-title">
                {title}
            </h3>
            <img src={image} className="card-image" alt={alt}/>
            <SkillList skills={skills} className="card-list"></SkillList>
        </div>
    );
};

export default SkillCard;