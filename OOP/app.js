const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv =yargs.argv;
let command = argv._[0];

//  ------------------------
//  add
// -------------------------
if (command === 'add') {
   let note =  notes.addNote(argv.title, argv.body);
   if (note){
    console.log('Note Created');
    notes.logMesg(note);
   }else {
    console.log('Please change duplicated title. ')
   }
}
//  ------------------------
// list
//  ------------------------
 else if (command === 'list') {
   let allNotes = notes.getAll();  
   console.log(`Printing ${allNotes.length} note(s).`)
   allNotes.forEach((note) => notes.logMesg(note));
}
//  ------------------------
//  read
//  ------------------------
else if (command === 'read') {
    let note = notes.getNote(argv.title);
    if (note){
      console.log('Note read...');
      notes.logMesg(note);
    }else {
      console.log('Note not found.')
     }
} 
//  ------------------------
// remove
//  ------------------------
else if (command === 'remove') {
    let nRemove = notes.removeNote(argv.title);
    let message = nRemove ? `Note titled '${argv.title}' removed` : `Note titled '${argv.title}' not found`;
    console.log(message);
} 
//  ------------------------
// unrecognized
//  ------------------------
else {
  console.log('Command not recognized');
}
