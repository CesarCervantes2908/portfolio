import React, { useState } from 'react';
import { Link as RouterLink} from 'react-router-dom';
import '../styles/ProjectNav.css';


function ProjectNav({remainProjects}) {
    const [isMenuActive, setIsMenuActive] = useState(false);


    const handleDisplay = (event)=>{
        if(window.innerWidth < 700 && event === "click"){
            setIsMenuActive(prevIsMenuActive => !prevIsMenuActive);
        }else if(window.innerWidth >= 700){
            setIsMenuActive(event === "enter" ? true : false);
        };
    };
    const renderProjectLinks = ()=>{
        if(remainProjects.length < 1) return;
        return remainProjects.map(project=>{
            return(
                <li className="project-navlink" key={project} >
                    <RouterLink to={`/projects/${project.id}`} >
                        {project.name}
                    </RouterLink>
                </li>
            );
        });
    };
    return (
        <nav className="project-nav" >
            <RouterLink to ="/">
                <h1 className="page-title">{"<César Cervantes/>"}</h1>
            </RouterLink>       
            <div className="link-container" 
                 onClick={()=>{handleDisplay("click")}} 
                 onMouseEnter={()=>{handleDisplay("enter")}}
                 onMouseLeave={()=>{handleDisplay("leave")}}
                >
                <span>Proyectos</span>
                <div className="triangle"></div>
                <ul className="project-nav-links"
                    style={{
                        bottom: `-${remainProjects.length * 10}vh`,
                        display: isMenuActive ? "inline-block" : "none"
                    }}
                    >
                    {renderProjectLinks()}
                </ul>
            </div>     
        </nav>
    );
};

export default ProjectNav;