const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`<h1>Autoscaling demo app using jenkins supper</h1><h4>Message: success</h4><p>Version: 1.0.0</p>`);
});

app.listen(port,()=>{
    console.log(`Demp app is up listening port ${port}`)
})
