const express = require('express');
const app = express();
const port = 5001;

app.get('/',(res,req) => {
    res.send(`<h1>Autoscalling demo app </h1> <h4>Message : success </h4> <p> Version: 1.0.0`)
})

app.listen(port,()=>{
    console.log(`Demp app is up listening port ${port}`)
})