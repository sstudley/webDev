console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding note', title, body);
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Reading note titled: ', title );
};

var removeNote = (title) => {
  console.log('Removing note titled: ', title );
};


module.exports = { 
  addNote, // addNote: addNote ES5
  getAll,
  getNote,
  removeNote
};