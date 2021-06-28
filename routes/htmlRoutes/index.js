const path = require('path');
const router = require('express').Router();


//takes us to the Index.html page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Develop/public/index.html'));
});

//connect the notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Develope/public/notes.html'));
});

//wild card incase they try to go somewhere that doesn't exist
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Develop/public/index.html'));
});





module.exports = router;