const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {  
    read() {
        return readFileAsync('db/db.json', 'utf8')
    }

    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note))
    }

    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes 
            try {
                parsedNotes = [].concat(JSON.parse(notes))
            } catch (error) {
                parsedNotes = []
            }
            return parsedNotes;
        })
    }

    addNote(note) {
        const { title, text } = note
        if(!title || !text) {
            throw new Error("Title and text can not be blank!")
        }
        const newNote = { title, text, id: uuidv4() } 
        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote)
    }

    removeNote(id) {
        return this.getNotes()
        .then((notes) => notes.filter((note) => note.id !== id))
        .then((filteredNotes) => this.write(filteredNotes))
    }
 }
 module.exports = new Store();

 
