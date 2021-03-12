import React, { useState } from 'react'
import Form from './Form'
import '../styles/Contacto.css';

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
                let jsonResponse = await response.json();
                console.log(jsonResponse);
                setSuccess(true);
                setSending(false);
            }else{
                throw new Error("Algo ocurrió mal")
            };
        } catch (error) {
            console.error(error);
            setError(true); 
            setSending(false);
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
            <div className="contacto-container">
                {
                    sending ? <h3 className="contacto__message" id="sending">Enviando...</h3>
                        : error ? <h3 className="contacto__message" id="error">Su mensaje <span>NO</span> pudo ser enviado<br/>Inténtelo de nuevo.</h3>
                            : success ? <h3 className="contacto__message" id="success">Su mensaje se envió correctamente</h3>
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
            </div>
        </section>
    );
};

export default Contacto; 