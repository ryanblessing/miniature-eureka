const fs = require('fs');
const path = require('path');


function saveNote(body) {
    let notes = loadNotes()
    let newNote = body;
    notes.push(newNote)

    fs.writeFile(
        path.join(__dirname, '../db/db.json')),
        JSON.stringify(notes)
        co
    return notes;
    };


function loadNotes() {
    let raw_notes = fs.readFile(
                path.join(__dirname, '../db/db.json'))
    return JSON.parse(raw_notes)
}; 

module.exports = { saveNote, loadNotes};