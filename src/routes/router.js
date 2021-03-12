const express = require('express');
const router = express.Router();
const transporter = require('../config/mailerTransporter');


router.post('/send-email', async (req, res, next) => {
    let { name, email, message } = req.body;
    console.log(req.body);
    try {
        let info = await transporter.sendMail({
            from: '<Portafolio@loquesea.com>', // sender address
            to: process.env.GMAIL_USER, // list of receivers
            subject: "Nuevo Requerimiento de Contacto", // Subject line
            html: `<h1>Buen día, jefe!</h1><br><p>Alguien quiere comunicarse con usted.</p><br><h3>Nombre: ${name}</h3><br><h3>Email: ${email}</h3><br><h3>Mensaje:</h3><br><p>${message}</p>`, // html body
        });
        res.send(info);
    } catch (error) {
        console.log(error);
        res.status(500).send("Algo ha fallado!");
    }
});

module.exports = router;