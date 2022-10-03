const express = require('express');
const app = express();
const port = 4000;


//display

app.get('',(req,res) => {
    res.send('Hello world')
})

//after accepting the request

app.listen(4000, ()=>{
    console.log('App listening on port 4000')
    })