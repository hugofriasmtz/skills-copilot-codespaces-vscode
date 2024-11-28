// Create web server 
// Run it using node comments.js

// 1. Import express module
var express = require('express');

// 2. Create an express application
var app = express();

// 3. Define a route for comments
app.get('/comments', function(req, res) {
    res.send('Comments route');
});

// 4. Start the server on port 3000
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});