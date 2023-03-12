//require in my notes router that will be created in the index.js, uuid helper function, and fs to be able to read and write file
const notes = require("express").Router();

const uuid = require("../helpers/uuid");

const fs = require("fs");
//look at index.js in the scripts folder to get a feel for the naming conventions being used for the object we are creating when a user submits a note.

//setup GET function for reading the db.json file and returning all saved notes
//this will use fs.readFile
notes.get("/", (req, res) => {});

//setup POST function for, when a new note is received, it is saved on req.body, it's added to the db.json file, and it returns the new note to the client.
//this will use fs.readFile and fs.writeFile
notes.post("/", (req, res) => {});
