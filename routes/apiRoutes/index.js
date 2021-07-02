const path = require('path');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { saveNote, loadNotes, createNewNote } = require('../../lib/notes');
const noteData = require('../../db/db.json');

// get routes
//notes-rec.body = property to access data on the server side.
router.get('/notes', (request, response) => {
    const notes = loadNotes();
    const noteData = JSON.parse(notes)

    response.json(noteData.notes);
});


/*
router.get('/notes/:id', (request, response) => {
    const chosen = request.params.noteData;
//to return a single note. You find the noteData(json)
// find it from the saveNote function
//if the note and its id are the same then bring up that note
noteData.find((saveNote) => {
    if (chosen === noteData.newId){
        return saveNote;
}});
    return response.send('No note found!');
});
*/

//post routes
router.post('/notes', (request, response) => {
    //creating a post route to grab the new note from request.body
    //put in the variable of newNote
    const newNote = createNewNote(request.body)
    saveNote().push(newNote);
    response.json(newNote);
    //push that newNote to the noteData that is our db.json
   // noteData.push(newNote);
    //console.log(newNote);
   // return response.json(newNote);
});


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
    response.json(noteData);
    
    
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