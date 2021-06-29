//fs module provides utilities for working w/ file and directory paths
const fs =  require('fs');
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const { response } = require('express');

const app = express();
const PORT = process.env.PORT || 3000;


//middleware
app.use(helmet())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false}));


//eventually put get in routes folder
app.get('/public/index.html', function(req, res) {
    res.sendFile(req.body) //going to work stopped here and its not working
})

// gives us a web page to listen for
app.listen(PORT, () => {
    console.log(`API server is now on port ${PORT}!`);
});