import React from 'react'
import '../styles/Inicio.css';
import { Link } from 'react-scroll'
import programmerImage from '../images/3426526-removebg-preview.png';

function Inicio() {
    return (
        <section id="inicio">
            <div className="column">
                <p className="intro"> Hola, soy desarrollador web fullstack, especialista en el stack MERN. Actualmente viviendo en la Ciudad de México.<br />¿Quieres impulsar tu negocio con un sitio web?<br />¿Exponer tus ideas o trabajos en un blog?<br />¡Desarrollemos todos tus proyectos web!</p>
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