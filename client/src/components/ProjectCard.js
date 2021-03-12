import React from 'react';
import '../styles/ProjectCard.css';
import { Link as RouterLink} from 'react-router-dom';

function ProjectCard({title, image, alt, smallDesc, id}) {
    return (
        <div className="project-card">
            <img src={image} className="card-image" alt={alt}/>
            <h3 className="card-title">{title}</h3>
            <p className="small-desc">
                {smallDesc}
            </p>
            <RouterLink to={`/projects/${id}`} className="card-link">Ver más ...</RouterLink>
        </div>
    );
};

export default ProjectCard;