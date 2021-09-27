const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(process.env.PORT || 8000, ()=>{console.log('Our app is up and running');});
module.exports = app