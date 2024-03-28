const express = require('express');
require('dotenv').config();
const app = express();


// const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello word')
})

app.get('/login', (req, res) => {
    res.send('<h1>login Apge</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example  app listining on port ${process.env.PORT}`);
})