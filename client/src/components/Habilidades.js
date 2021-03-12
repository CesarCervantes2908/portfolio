import React from 'react';
import DownloadButton from './DownloadButton';
import SkillCard from './SkillCard';
import DownloadCloud from './DownloadCloud';
import '../styles/Habilidades.css';
import frontendImg from '../images/frontend-removebg-preview.png';
import backendImg from '../images/backend-removebg-preview.png';
import generalImg from '../images/Cerebro-removebg-preview.png';

let skillsGroup = [
    {
        skillGroup: 'Front-end',
        skillImage: frontendImg,
        alt : 'Ilustración de un monitor de computadora. Representando el desarrollo web del lado del cliente',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'SASS']
    },
    {
        skillGroup: 'Back-end',
        skillImage: backendImg,
        alt: 'Ilustración de un servidor con una nube detrás. Representando el desarrollo web del lado del servidor',
        skills: ['Node', 'Express', 'Mongo DB', 'MySQL']
    },
    {
        skillGroup: 'General',
        skillImage: generalImg,
        alt: 'Ilustación de un cerebro con un monitor de computadora detrás.',
        skills: ['Control de Versiones (Git)', 'Buenas prácticas de programación', 'Análisis de Problemas']
    }
];
function Habilidades() {
    const renderCards = () => {
        if (skillsGroup.length < 1) return;
        return skillsGroup.map((group, index) => {
            return (
                <SkillCard key={index}
                    title={group.skillGroup}
                    image={group.skillImage}
                    skills={group.skills}
                    alt={group.alt}
                />
            );
        });
    };
    return (
        <section id="habilidades">
            <h2>Habilidades Técnicas</h2>
            <div className='download-button-group'>
                <DownloadButton id="Resume-button" fileName="Cesar_Cervantes_Resume">
                    <DownloadCloud />
                    Resume
                </DownloadButton>
                <DownloadButton id="CV-button" fileName="Cesar_Cervantes_Resume">
                    <DownloadCloud />
                    CV
                </DownloadButton>
            </div>
            <div className="project-card-container">
                {renderCards()}
            </div>
        </section>
    );
};

export default Habilidades;