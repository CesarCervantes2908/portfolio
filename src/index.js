require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT;
const router = require('./routes/router');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(router);


if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
}


app.listen(PORT, ()=>{
    console.log(`Server Listening on Port: ${PORT}`);
});