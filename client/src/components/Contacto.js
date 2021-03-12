import React, { useState } from 'react'
import Form from './Form'

function Contacto() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
        <section id="contacto">
            <h2>Contacto</h2>
            <Form></Form>
        </section>
    );
};

export default Contacto; 