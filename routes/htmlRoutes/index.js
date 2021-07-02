const path = require('path');
const router = require('express').Router();

//to get the index.html file to display
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });
//get the notes file to display
router.get('/notes', (request, response) => {
    response.sendFile(path.join(__dirname, '../../public/notes.html'));
  });

  //wildcard route to bring back to the home page
  //to get the index.html file to display
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

module.exports = router;