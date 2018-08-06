const fs = require('fs');


// =================================
// fetchNotes
// ===============================
let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
    } catch (e){
    return [];
    }
};

// =================================
// saveNotes
// ===============================
let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// =================================
// addNote
// ===============================
let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };
  let duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0){
      notes.push(note);
      saveNotes(notes);
      return note;
      } 
};

// =================================
// List All Notes
// ===============================
let getAll = () => {
  return fetchNotes();
};

// =================================
// Read A Note
// ===============================
let getNote = (title) => {
  let notes = fetchNotes();
  let note = notes.filter((note) => note.title === title);
  return note[0];
};

// =================================
// Delete A Note
// ===============================
let removeNote = (title) => {
  let notes = fetchNotes();
    let fNotes = notes.filter((note) => note.title !== title);
    saveNotes(fNotes); 
    return notes.length !=fNotes.length;
  };

// =================================
// Logging Note
// ===============================
  let logMesg = (note) => {
    console.log('=====');
    console.log(`Title: ${note.title}`);
    console.log('-----');
    console.log(`Body: ${note.body}`);
  };



module.exports = { 
  addNote, // addNote: addNote ES5
  getAll,
  getNote,
  removeNote,
  logMesg
};