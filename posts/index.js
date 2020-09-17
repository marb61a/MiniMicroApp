const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Will hold posts
const posts = {};

// Setup routes
app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    // Will generate a random string for a post id
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id, title
    };

    // Will send back just created post
    res.status(201).send(posts[id]);
});

app.listen(4000, () => {
    console.log('listening on port 4000')
});
