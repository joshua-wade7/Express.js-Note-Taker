//require in express and import in a Router for notes.js (I think)
const express = require("express");

const notesRouter = require("./notes");
//create app variable to store the value of express()
const app = express();
//Use the route(s) I created in this js file i.e. app.use("/notes", notesRouter)
app.use("/notes", notesRouter);
//export it out i.e. module.exports = app;
module.exports = app;
