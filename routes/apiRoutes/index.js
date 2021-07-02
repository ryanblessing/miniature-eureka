const path = require('path');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { saveNote } = require('../../lib/notes');

// get routes
//notes-rec.body = property to access data on the server side.
router.get('/notes', (request, response) => {
    response.send('get route');
});

let id = 0;

//post routes
router.post('/notes', (request, response) => { 

    console.log("request: ", request);
    const {body} = request
   // console.log("req body: ", body);
    
    // add an id - uuid
    const newId = uuidv4();
    request.body.id = newId
    console.log(newId);
// works till here
    
   // let results = saveNotes(req.params, results)
   // let results = saveNote(request.body)
    response.json(results);
    
    
    //making that new not use the function from index.js. to create a array
     //const newNote = getAndRenderNotes(require.body, noteDb)
     //taking the array from json format?
    //response.json(newNote);
});

/*
//put routes
router.put('/notes/:id', (request, response) => {
    response.send('put route')
})

//delete routes
router.delete('/notes/:id', (request, response) => {
    response.send('delete route')
})

*/


module.exports = router;