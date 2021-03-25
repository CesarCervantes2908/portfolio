import metaGatoMain from '../images/MetaGato4.jpg';
import metaGato1 from '../images/MetaGato1.jpg';
import metaGato2 from '../images/MetaGato2.jpg';
import metaGato3 from '../images/MetaGato3.jpg';
import salamandraMain from '../images/Salamandramilk1.jpg';
import salamandra1 from '../images/Salamandramilk2.jpg';
import salamandra2 from '../images/Salamandramilk3.jpg';
import salamandra3 from '../images/Salamandramilk4.jpg';
import salamandra4 from '../images/Salamandramilk5.jpg';
import burritos1 from '../images/Burritos1.jpg';
import burritos2 from '../images/Burritos2.jpg';
import burritos3 from '../images/Burritos3.jpg';
import burritos4 from '../images/Burritos4.jpg';
import burritos5 from '../images/Burritos5.jpg';
import burritos6 from '../images/Burritos6.jpg';
import burritos7 from '../images/Burritos7.jpg';
import burritos8 from '../images/Burritos8.jpg';

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
        desc: "Esta web fue desarrollada para el Centro de Investigaciones en Computación del IPN. Específicamente para el laboratorio de inteligencia artificial. Tiene el propósito de evaluar el desempeño de algoritmos de IA mediante un juego de tic tac toe.",
        link: 'https://meta-gato.herokuapp.com/'
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
        desc: "Esta web fue diseñada y desarrollada para promover un pequeño negocio local dedicado a la producción y venta de productos orgánicos. El sitio web consta de 3 páginas en las que se puede encontrar información de la empresa y los beneficios de sus productos, el cátalogo de productos con sus precios y características y una forma de contactar con la empresa para poder realizar un pedido",
        link: 'https://salamandramilk.shop'
    },{
        id: 'burritosApp',
        name: 'BurritosApp',
        mainImg: {
            imgageURL: burritos1,
            alt: 'Previsualización del sitio web de Burritos App'
        },
        images: [burritos1, burritos2, burritos3, burritos4, burritos5, burritos6, burritos7, burritos8],
        smallDesc: "Aplicación Web que permite administrar un negocio local de venta de burritos y tacos",
        skills: ["HTML", "Bootstrap", "React", "React Router", "React Hooks", "Node.JS", "Express", "MongoDB"],
        desc: "Esta apliación Web permite administrar un negocio. Está enfocada a un negocio de mi localidad de venta de burritos y tacos. Cuenta con tres apartados principales. Ventas; permite ver los días en los que se han tenido ventas, así como el total que se vendió en ese día. Así mismo, si das click en la fecha del día te llevará a una nueva página en la que podrás ver todos los clientes de ese día. Estos datos los podrás generar a través de la app, ya que también te permite ingresar nuevas cuentas para cada día, así como calcular el cambio que necesitas dar con base en el pago recibido. El segundo apartado es Gastos: el cuál te permite generar una lista de compras, la lista de compras actual aparecerá en la página principal del sitio. El tercer apartado es de pendientes, el cual te permite generar una lista de pendientes, igualmente la actual aparecerá en el inicio. Ambos apartados antes mencionados permiten ver listas generadas anterior mente y se organizan por fechas al igual que las ventas. Adicionalmente la app, registra todo el efectivo que entra al negocio a través de las ventas y el efectivo que sale a través de las compras. ¡Prueba la demo en el link de abajo! Y si la quieres para tu negocio o necesitas algo similar, ¡Contáctame!",
        link: 'https://burritosapp.herokuapp.com/'
    }
];




export default  projects;