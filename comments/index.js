const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

// Object for holding comments
const commentsByPostId = {};

// Setup routes
app.get('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex'); 

});

app.post('/posts/:id/comments', (req, res) => {
    
});

app.listen(4000, () => {
    console.log('listening on port 4000')
});
