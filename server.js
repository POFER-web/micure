const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan());

app.get('/', function(req, res) { // http://localhost/
    res.send('Hello, world!');
});

app.listen(3000, function() {
    console.log('Server is running');
});