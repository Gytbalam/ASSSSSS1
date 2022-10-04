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

    /* ++++ All the code expressed here was taken from COMP-229 (Web app dev) , 
following the steps of educational videos. Also the book Beginning Node.js, Express & MongoDB Development (2019)
by Greg Lim was consoulted. */