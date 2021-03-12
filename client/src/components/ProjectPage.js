import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import projects from '../utils/InfoProjects';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import SkillList from '../components/SkillList';
import '../styles/ProjectPage.css';
import ProjectNav from './ProjectNav';


function ProjectPage() {
    let mediaMatch = window.matchMedia('(min-width: 700px)');
    const [matches, setMatches] = useState(mediaMatch.matches);
    useEffect(() => {
        const handler = event => setMatches(event.matches);
        mediaMatch.addEventListener('change', handler);
        return () => mediaMatch.removeEventListener('change', handler);
    });
    let styles = {
        position: 'relative',
        width: matches ? '70%' : '90%',
        margin: '10vh 0 15vh 0',
        zIndex: '0'
    };
    let { id } = useParams();
    let project = projects.filter(project=>project.id === id)[0];
    let remainProjects = projects.filter(project => project.id !== id);
    const renderSliderImages = (images)=>{
        if(images.length < 1) return;
        return images.map((image, index)=>{
            return(
                <div data-src={image} key={index}/>
            );
        });
    }
    return (
        <>
            <ProjectNav remainProjects={remainProjects}/>
            <section className="project-page">
                <h2 className="project-title">
                    {project.name}
                </h2>
                <AwesomeSlider
                    play={true}
                    cancelOnInteraction={true}
                    interval={6000}
                    style={styles}
                >
                    {renderSliderImages(project.images)}
                </AwesomeSlider>
                <h3 className="acerca">Sobre Este Proyecto</h3>
                <p className="project-description">
                    {project.desc}
                </p>
                <h3 className="tecnologias">Tecnologías Utilizadas</h3>
                <SkillList skills={project.skills}></SkillList>
            </section>
        </>
    );
};

export default ProjectPage;

