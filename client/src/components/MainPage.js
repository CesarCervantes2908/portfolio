import React, { useEffect } from 'react';
import { Element, animateScroll } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import NavBar from './NavBar';
import Inicio from './Inicio';
import Habilidades from './Habilidades';
import Proyectos from './Proyectos';
import Contacto from './Contacto';
import 'animate.css/animate.min.css';


const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    width: '100vw'
};

function MainPage() {
    useEffect(()=>{
        animateScroll.scrollTo(0);
    }, []);
    return (
        <main>
            <NavBar></NavBar>
            <ScrollAnimation animateIn='animate__fadeInLeft'>
                <Element name="inicio" style={styles}>
                    <Inicio/>
                </Element>
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__fadeInRight'>
                <Element name="habilidades" style={styles}>
                    <Habilidades/>
                </Element>
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__fadeInLeft'>
                <Element name="proyectos" style={styles}>
                    <Proyectos/>
                </Element>
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__fadeInRight'>
                <Element name="contacto" style={styles}>
                    <Contacto/>
                </Element>  
            </ScrollAnimation>
            <a href='https://www.freepik.es/vectores/tecnologia' className="attributions">Vector de Tecnología creado por stories - www.freepik.es</a>
        </main>
    );
};

export default MainPage;