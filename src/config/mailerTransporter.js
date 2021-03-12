const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.GMAIL_USER, // generated ethereal user
        pass: process.env.GMAIL_API_KEY, // generated ethereal password
    },
});
const verifyTransporter = async () => {
    await transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });
};
verifyTransporter();
module.exports = transporter;