const router = require('express').Router();
const store = require('../db/store');

// get routes
router.get('/notes', (request, response) => {
    store
    .getNotes()
    .then((notes) => {
        return response.json(notes)
    })
    .catch((err) => response.status(500).json(err))
});

//post routes
router.post('/notes', (request, response) => {
   store
   .addNote(request.body)
   .then((note) => response.json(note))
   .catch((err) => response.status(500).json(err))
});

//delete routes
router.delete('/notes/:id', (request, response) => {
    store
    .removeNote(request.params.id)
    .then(() => response.json({ ok: true}))
    .catch((err) => response.status(500).json(err))
});




module.exports = router;