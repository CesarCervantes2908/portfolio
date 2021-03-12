import React, { useState } from 'react'
import Form from './Form'

function Contacto() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    return (
        <section id="contacto">
            <h2>Contacto</h2>
            <Form 
                changeName={setName}
                changeEmail={setEmail}
                changeMessage={setMessage}
                name={name}
                email={email}
                message={message}
            ></Form>
        </section>
    );
};

export default Contacto; 