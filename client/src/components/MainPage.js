import React from 'react';
import { Element } from 'react-scroll';
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
    return (
        <main>
            <NavBar></NavBar>
            <Element name="inicio" style={styles}><Inicio></Inicio></Element>
            <Element name="habilidades" style={styles}><Habilidades></Habilidades></Element>
            <Element name="proyectos" style={styles}><Proyectos></Proyectos></Element>
            <Element name="contacto" style={styles}><Contacto></Contacto></Element>  
        </main>
    );
};

export default MainPage;