import React, { useEffect } from 'react';
import { Element, animateScroll } from 'react-scroll';
import NavBar from './NavBar';
import Inicio from './Inicio';
import Habilidades from './Habilidades';
import Proyectos from './Proyectos';
import Contacto from './Contacto';


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
            <Element name="inicio" style={styles}><Inicio></Inicio></Element>
            <Element name="habilidades" style={styles}><Habilidades></Habilidades></Element>
            <Element name="proyectos" style={styles}><Proyectos></Proyectos></Element>
            <Element name="contacto" style={styles}><Contacto></Contacto></Element>  
            <a href='https://www.freepik.es/vectores/tecnologia' className="attributions">Vector de Tecnología creado por stories - www.freepik.es</a>
        </main>
    );
};

export default MainPage;