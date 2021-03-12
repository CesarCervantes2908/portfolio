import React from 'react'

function SkillList({skills, id}) {
    const renderList = ()=>{
        if(skills.length < 1) return;
        return skills.map((skill, index)=>{
            return(
                <li className="skill-list-item" key={index}>
                    {skill}
                </li>
            );
        }); 
    };
    return (
        <ul className="skill-list" id={id}>
            {renderList()}
        </ul>
    );
}

export default SkillList;