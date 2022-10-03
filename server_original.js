const express = require('express');
const app = express();
const port = 4000;


//Routes

app.get('/',(req,res) => {
    res.send('Hello world');
})

app.get('about',(req,res) => {
    res.send('About me');
})


//after accepting the request

app.listen(4000, ()=>{
    console.log('App listening on port 4000');
    })