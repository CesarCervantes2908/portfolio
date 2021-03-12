import metaGatoMain from '../images/MetaGato4.jpg';
import metaGato1 from '../images/MetaGato1.jpg';
import metaGato2 from '../images/MetaGato2.jpg';
import metaGato3 from '../images/MetaGato3.jpg';
import salamandraMain from '../images/Salamandramilk1.jpg';
import salamandra1 from '../images/Salamandramilk2.jpg';
import salamandra2 from '../images/Salamandramilk3.jpg';
import salamandra3 from '../images/Salamandramilk4.jpg';
import salamandra4 from '../images/Salamandramilk5.jpg';

let projects = [
    {
        id: 'metaGato',
        name: "Ultimate Tic Tac Toe",
        mainImg: {
            imgageURL: metaGatoMain,
            alt: 'Previsualización del sitio web metagato.herokuapp'
        },
        images: [metaGatoMain, metaGato1, metaGato2, metaGato3],
        smallDesc: "Web que tiene el propósito de testear algoritmos de inteligencia artificial a través de un juego de meta gato",
        skills: ["HTML", "CSS", "JavaScript", "React", "Node", "Express"],
        desc: "Esta web fue desarrollada para el Centro de Investigaciones en Computación del IPN. Específicamente para el laboratorio de inteligencia artificial. Tiene el propósito de evaluar el desempeño de algoritmos de IA mediante un juego de tic tac toe."
    },{
        id: 'salamandramilk',
        name: "SalamandraMilk",
        mainImg: {
            imgageURL: salamandraMain,
            alt: 'Previsualización del sitio web salamandramilk.shop'
        },
        images: [salamandraMain, salamandra1, salamandra2, salamandra3, salamandra4],
        smallDesc: "Web para promoción e información de un negocio de productos orgánicos",
        skills: ["HTML", "CSS", "JavaScript", "React", "React Router"],
        desc: "Esta web fue diseñada y desarrollada para promover un pequeño negocio local dedicado a la producción y venta de productos orgánicos. El sitio web consta de 3 páginas en las que se puede encontrar información de la empresa y los beneficios de sus productos, el cátalogo de productos con sus precios y características y una forma de contactar con la empresa para poder realizar un pedido"
    }
];




export default  projects;