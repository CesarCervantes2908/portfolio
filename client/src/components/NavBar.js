import React, { useState } from 'react';
import {Link} from 'react-scroll';
import '../styles/NavBar.css';


let navLinks = ["habilidades", "proyectos", "contacto"];


function NavBar() {
    const [isBurgerActive, setIsBurgerActive] = useState(false);
    const handleBurgerClick = (e)=>{
        setIsBurgerActive(prevIsBurgeractive => !prevIsBurgeractive);
    };
    const renderNavLinks = ()=>{
        return navLinks.map((navLink, index)=>{
            let delay = isBurgerActive ? (index * 0.5) : 0;
            return(
                <li className="nav-link" 
                    key={navLink}
                    style={{
                        transition: `all 0.5s ease-in ${delay}s`,
                        transform: isBurgerActive ? 'translateX(-45vw)' : ''
                    }}>
                    <Link to={navLink}
                          smooth={true}
                          onClick={()=>{setIsBurgerActive(false)}}>
                              {navLink}
                          </Link>
                </li>
            );
        });
    };
    return (
        <nav>
            <Link to="inicio" smooth={true}><h1 className="page-title">{"<César Cervantes/>"}</h1></Link>
            <ul className="nav-links">
                {renderNavLinks()}
            </ul>
            <div className={"burger " + (isBurgerActive ? 'active' : '')}
                 onClick={handleBurgerClick}>
                <div className="line l-1"></div>
                <div className="line l-2"></div>
                <div className="line l-3"></div>
            </div>
        </nav>
    );
};

export default NavBar;