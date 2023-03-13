//require in my notes router that will be created in the index.js, uuid helper function, and fs to be able to read and write file
const notes = require("express").Router();

const uuid = require("../helpers/uuid");

const {
  readFromFile,
  writeToFile,
  readAndAppend,
} = require("../helpers/fsUtils");
//look at index.js in the scripts folder to get a feel for the naming conventions being used for the object we are creating when a user submits a note.

//setup GET function for reading the db.json file and returning all saved notes
//this will use fs.readFile
notes.get("/:notes_id", (req, res) => {
  const notesId = req.params.notes_id;
  readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((notes) => notes.notes_id === notesId);
      return result.length > 0
        ? res.json(result)
        : res.json("No notes with that ID");
    });
});

notes.get("/", (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

//setup POST function for, when a new note is received, it is saved on req.body, it's added to the db.json file, and it returns the new note to the client.
//this will use fs.readFile and fs.writeFile
notes.post("/", (req, res) => {
  console.info(`${req.method} request received for new notes submission`);
  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      notes_id: uuid(),
    };

    // readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));

    // writeToFile("./db/db.json", newNote);

    readAndAppend(newNote, "./db/db.json");
    res.json("successfully added new note");
  }
});

module.exports = notes;
