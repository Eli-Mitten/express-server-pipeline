const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/bye', (req, res) => {
    res.send('Goodbye World!');
});

app.get('/hello/:name', (req, res) => {
    res.send(`Hello ${req.params.name}!`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});