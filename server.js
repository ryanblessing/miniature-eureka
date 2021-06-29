//fs module provides utilities for working w/ file and directory paths
const fs =  require('fs');
const path = require('path');
//npm package module
const express = require('express');


//assigned to chain methods together
const app = express();
//express function to the app so we can chain on methods to the express server
const PORT = process.env.PORT || 3000;


//added for routes to api and html
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//express.static is our middleware
app.use(express.static('public'));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);




// gives us a web page to listen for
app.listen(PORT, () => {
    console.log(`API server is now on port ${PORT}!`);
});