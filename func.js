const fs = require('fs');
const chalk = require('chalk');
const addNote = (title, body) => {
  const notes = listnotes();
  const duplicate = notes.find((note) => title === note.title);
  if (!duplicate) {
    notes.push({
      title: title,
      body: body,
    });
    addJson(notes);
    console.log(chalk.green('Note added'));
  } else {
    console.log(chalk.red('Note title already taken! Try another title.'));
  }
};
const addJson = (notes) => {
  const notej = JSON.stringify(notes);
  fs.writeFileSync('notes.json', notej);
};
const listnotes = () => {
  try {
    const notebuf = fs.readFileSync('notes.json');
    const note = notebuf.toString();
    const notes = JSON.parse(note);
    return notes;
  } catch (e) {
    return [];
  }
};
const removeNote = (title) => {
  const notes = listnotes();
  const newNotes = notes.filter((note) => title !== note.title);
  if (newNotes.length === notes.length) {
    console.log(chalk.red('No note exists with such title.'));
  } else {
    const newNotej = JSON.stringify(newNotes);
    fs.writeFileSync('notes.json', newNotej);
    console.log(chalk.green('Note removed'));
  }
};
const listNote = () => {
  const notes = listnotes();
  console.log(chalk.inverse('Your notes...'));
  notes.forEach((note) => console.log(note.title));
};
const readNote = (title) => {
  const notes = listnotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.green('Title : ' + note.title));
    console.log('Body : ' + note.body);
  } else {
    console.log(chalk.red('No such note exists'));
  }
};
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
};
