process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const fetch = require('node-fetch');

const express = require('express');
const send = require('send');
const app = express();
const port = 4000;


const key = require("./variables/api.js").key;
const url = require("./variables/api.js").url;

const isKeyValid = key != "" ? true : false

isKeyValid === false && process.exit(1);

fetch(url)
    .then(res => res.json())
    .then(data => {
        asteroidsNumber = data.element_count;
        sendData(asteroidsNumber);
    })
    .catch(err => {
        return err.message;
    })

const sendData = (asteroidsNumber) => {
   
    app.get('/meteors', (req, res) => {
        res.send(`Nasa have seen ${asteroidsNumber} asteroids.`);
    })
        
    app.listen(port, () => {
         console.log(`Server is running on port ${port}`);
    });
}
