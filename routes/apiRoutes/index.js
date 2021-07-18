const router = require('express').Router();
const { notes } = require('../../data/db.json');
const {createNewNote, deleteNote} = require('../../lib/notes');

// route to render 'notes' data
router.get('/notes', (req, res) => {
    res.json(notes);
});

// route to add new data to 'notes'
router.post('/notes', (req, res) => {
    const note = createNewNote(req.body, notes);
    res.json(note);

});

// deletes data from the file
router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const removeNote = deleteNote(id, notes);
    res.json(removeNote);
})

module.exports = router;