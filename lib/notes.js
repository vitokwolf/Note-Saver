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
    return notes;
};

// delete a note
function deleteNote(id, notes) {
    //remove the note with the matching id 
    notes.forEach((note, index) => {
        if (id == note.id) {
            notes.splice(index, 1);
            const newNotes = notes.slice();
            // // update each note id based on the lenght of the 'notes'
            for (let i = 0; i < newNotes.length; i++) {
                newNotes[i].id = (i + 1).toString();
            };
                //     // rewrite json file with updated data
                fs.writeFile(
                    path.join(__dirname, '../data/db.json'), JSON.stringify({ notes: newNotes }, null, 2),
                    function (err) {
                        if (err) {
                            return console.log(err);
                        }
                    });
            }
        });
    return notes;
};

module.exports = { createNewNote, deleteNote };