const fs = require("fs");
const path = require("path");

// create new note
function createNewNote(body, notesArr) {
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notes: notesArr }, null, 2)
    );
    return note;
};

// delete a note
function deleteNote(id, notesArr) {
    // const neededNote = notesArr.find(({ note }) => note.id === id);
    //finds the note with the matching id and rewrites 'notes' avoiding it

    notesArr = notesArr.filter(({ note }) => note.id !== id);

    fs.writeFile(
        path.join(__dirname, './data/db.json'),
        JSON.stringify({ notes: notesArr }, null, 2),
        (err) => {
            if (err) throw err;
            res.status(200).json(notes);
        }

    );
    return;
};

module.exports = { createNewNote, deleteNote };