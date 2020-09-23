const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
    const event = req.body;

    // Posts
    axios.post('http://localhost:4000/events', event);
    // Comments
    axios.post('http://localhost:4001/events', event);
    // Query Service
    axios.post('http://localhost:4002/events', event);
    // Moderation Service
    axios.post('http://localhost:4003/events', event);

    res.send({ status: 'ok' });

});

app.listen(4005, () => {
    console.log('Listening on 4005');
});
