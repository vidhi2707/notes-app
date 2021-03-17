const yargs = require('yargs');
const notes = require('./func.js');
yargs.command({
  command: 'add',
  description: 'Adding a note',
  builder: {
    title: {
      description: 'Title of note',
      demandOption: true,
      type: 'string',
    },
    body: {
      description: 'Body of the node',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => notes.addNote(argv.title, argv.body),
});
yargs.command({
  command: 'delete',
  description: 'Deleting a note',
  builder: {
    title: {
      description: 'Title of note',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => notes.removeNote(argv.title),
});
yargs.command({
  command: 'read',
  description: 'Reading a note',
  builder: {
    title: {
      discription: 'Title of the note',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => notes.readNote(argv.title),
});
yargs.command({
  command: 'list',
  description: 'Listing a note',
  handler: () => notes.listNote(),
});
yargs.parse();
