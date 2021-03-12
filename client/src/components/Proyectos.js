import React from 'react'
import ProjectCard from './ProjectCard';
import '../styles/Proyectos.css';
import projects from '../utils/InfoProjects';

function Proyectos() {
    const renderProyectCards = () => {
        if (projects.length < 1) return;
        return projects.map(project => {
            return (
                <ProjectCard title={project.name}
                    image={project.mainImg.imgageURL}
                    smallDesc={project.smallDesc}
                    alt={project.mainImg.alt}
                    key={project.id}
                    id={project.id}
                />
            );
        });
    };
    return (
        <section id="proyectos">
            <h2>Proyectos</h2>
            <div className="project-container">
                {renderProyectCards()}
            </div>
        </section>
    );
};

export default Proyectos;