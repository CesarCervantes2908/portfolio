import React from 'react';
import Button from './Button';
import '../styles/Form.css';
function Form() {
    return (
        <form>
            <input type="text" placeholder="Escribe tu nombre"/>
            <input type="text" placeholder="Escribe tu email"/>
            <textarea placeholder="Escribe tu mensaje"/>
            <Button type="submit">Enviar</Button>
        </form>
    );
};

export default Form;