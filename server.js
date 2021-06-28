//fs module provides utillities for working w/ file and directory paths
const fs =  require('fs');

//npm package module
const express = require('express');

//express function to the app so we can chain on methods to the express server
const app = express();


//get routes to potentially move to a different folder
app.get('./Develop/db/db.json', (req, res) => {
    res.json(db.json);
});





// gives us a web page to listen for
app.listen(80, () => {
    console.log('This is actually working?')
})