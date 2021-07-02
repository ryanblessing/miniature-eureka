//fs module provides utilities for working w/ file and directory paths
const fs =  require('fs');
const path = require('path');
const express = require('express');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

const htmlRoutes = require('./routes/htmlRoutes/index.js')
const apiRoutes = require('./routes/apiRoutes/index.js')

//middleware
app.use(helmet())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false}));

//eventually put get in routes folder
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

// gives us a web page to listen for
app.listen(PORT, () => {
    console.log(`API server is now on port ${PORT}!`);
});