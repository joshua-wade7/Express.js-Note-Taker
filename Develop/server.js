//Need to require in express, path, and api which will = ("./routes/index.js")
const express = require("express");

const path = require("path");

const PORT = 3001;
//ADD PORT let it = 3001

const api = require("./routes/index.js");
const app = express();

//Need to setup middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Need to setup middleware to handle static assests ("public")
app.use(express.static("public"));

//Need to setup app.use("/api", api) to allow all other routes to be prefixed with api on the backend.
app.use("/api", api);
//Setup GET /notes that will return notes.html
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

//Setup Wildcard (*) that will return index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

//Turn on listen for the PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
