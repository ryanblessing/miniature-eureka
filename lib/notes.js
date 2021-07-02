
const fs = require('fs');
const path = require('path');


function createNewNote(newNote, noteData){
    let createNote = request.body.id;

    noteDate.push(createNote);

    fs.writeFile(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ createNote: noteData}), null, 2
    )
    return newNote;
}


function loadNotes() {
    let noteData = fs.readFile(
                path.join(__dirname, '../db/db.json'))
    return JSON.parse(noteData)
}; 


/*function saveNote(body) {
    let notes = loadNotes()
    let createNote = body;
    notes.push(createNote)

    fs.writeFile(
        path.join(__dirname, '../db/db.json')),
        JSON.stringify(notes)
        co
    return notes;
    };
*/
module.exports = { createNewNote, saveNote, loadNotes};