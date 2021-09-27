const express = require('express');
const port = process.env.port || 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello There!');
});
app.listen(port, ()=>{console.log('Our app is up and running');});
module.exports = app