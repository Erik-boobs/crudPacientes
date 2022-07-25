const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');

const rutas = require('./rutas');

const app= express();
app.set('port',process.env.PORT || 3000);
const dbOptions = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'prueba431'
}

// middlewares
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());

// routes
app.get('/', (req, res)=>{
    res.send('Welcome to my api')
});
app.use('/api', rutas);

// server running
app.listen(app.get('port'), ()=>{
console.log('server on port',app.get('port'));
});