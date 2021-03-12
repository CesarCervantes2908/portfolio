import React from 'react';
import Button from './Button';
import '../styles/Form.css';
function Form({ changeName, changeEmail, changeMessage, name, email, message}) {
    return (
        <form>
            <input 
                type="text" 
                placeholder="Escribe tu nombre"
                onChange={ ({target}) => changeName(target.value)}    
                value={name}
                />
            <input 
                type="email" 
                placeholder="Escribe tu email"
                onChange={({target}) => changeEmail(target.value)}    
                value={email}
                />
            <textarea 
                placeholder="Escribe tu mensaje"
                onChange={({target}) => changeMessage(target.value)}
                value={message}
                />
            <Button type="submit">Enviar</Button>
        </form>
    );
};

export default Form;