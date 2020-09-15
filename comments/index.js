const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

// Object for holding comments
const commentsByPostId = {};

// Setup routes
app.get('/posts/:id/comments', (req, res) => {    
    res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex'); 
    const { content } = req.body;

    const comments = commentsByPostId[req.params.id] || [];
    comments.push({
        id: commentId,
        content
    });
    commentsByPostId[req.params.id] = comments;

    // Send back entire comments array
    res.status(201).send(comments);
});

app.listen(4000, () => {
    console.log('listening on port 4000')
});
