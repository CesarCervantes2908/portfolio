import React, { useState } from 'react'
import Form from './Form'

function Contacto() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const sendMail = async(e)=>{
        e.preventDefault();
        setSending(true);
        let body = {
            name, email, message
        };
        body = JSON.stringify(body);
        try {
            let response = await fetch(`/send-email`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            });
            if(response.ok){
                setSending(false);
                let jsonResponse = await response.json();
                console.log(jsonResponse);
                setSuccess(true);
            }else{
                throw new Error("Algo ocurrió mal")
            };
        } catch (error) {
            console.error(error);
            setSending(false);
            setError(true); 
        };
        let timeoutID = setTimeout(()=>{
            setError(false);
            setSuccess(false);
            setName('');
            setEmail('');
            setMessage('');
            clearTimeout(timeoutID);
        }, 3000);
    };
    return (
        <section id="contacto">
            <h2>Contacto</h2>
            {
                sending ? <h3>Enviando...</h3> 
                : error ? <h3>Algo salió Mal</h3>
                : success ? <h3>Su mensaje se envió correctamente</h3>
                : <Form
                    changeName={setName}
                    changeEmail={setEmail}
                    changeMessage={setMessage}
                    name={name}
                    email={email}
                    message={message}
                    handleSubmit={sendMail}
                ></Form>
            }
        </section>
    );
};

export default Contacto; 