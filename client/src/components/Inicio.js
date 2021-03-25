import React from 'react'
import '../styles/Inicio.css';
import { Link } from 'react-scroll'
import programmerImage from '../images/3426526-removebg-preview.png';

function Inicio() {
    return (
        <section id="inicio">
            <div className="column">
                <p className="intro"> Hola, soy desarrollador web fullstack, egresado del IPN y actualmente viviendo en la Ciudad de México. Me enfoco en el desarrollo con React y Node.<br />Impulsa tu negocio con un sitio web.<br />Expresa tus ideas o conocimientos en Blog.<br />¡Desarrollemos todos los proyectos web que tienes en mente!</p>
                <Link to="contacto" smooth={true} className="btn btn-contacto">
                    ¡Contáctame!
                </Link>
            </div>
            <img src={programmerImage} 
                 className="programmer-image"
                 alt="Ilustración de un programador sentado esn su escritorio, frente a una computadora."
                 />
        </section>
    );
}

export default Inicio;