const express = require('express');
const request = require('request')
const app = express();

const PORT = 8080;
const URL = 'https://www.nbrb.by/api/exrates/rates?periodicity=0';

let options = {
    json: true
};

let cur = '';

app.set('views', './public');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

request(URL, options, (error, res, body) =>{
    if(error){
        console.log(error);
    }
    if(!error){
        cur = body;
    }
});

app.get('/', (req, res) =>{
    res.render('index.ejs', {cur: cur});
});

app.listen(PORT, () => {
    console.log('Server is working');
});