import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    res.json({ message: "ola" });
});

app.listen(3333);