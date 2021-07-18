const fs = require("fs");
const path = require("path");

// create new note
function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
        // add note id based on the lenght of the 'notes'
    for (let i = 0; i < notes.length; i++) {
        notes[i].id = (i + 1).toString();
    };
    // rewrite json file with updated data
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notes: notes }, null, 2)
    );
    return note;
};

// delete a note
function deleteNote(id, notes) {
    //finds the note with the matching id and rewrites 'notes' avoiding it
    notes = notes.filter((note) => note.id !== id);
    // update each note id based on the lenght of the 'notes'
    for (let i = 0; i < notes.length; i++) {
        notes[i].id = (i + 1).toString();
    };
    // rewrite json file with updated data
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notes }, null, 2),
        (err) => {
            if (err) throw err;
            res.status(200).json(notes);
        }

    );
    return notes;
};

module.exports = { createNewNote, deleteNote };