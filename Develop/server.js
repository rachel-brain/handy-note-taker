// Access packages needed for the application
const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
const notes = require('./db/db.json');

const PORT = 3001;

const app = express();

// Sets up the Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));

// GET request for the route to the `notes.html` page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// GET `/api/notes` to read the `db.json` file and return all saved notes as JSON
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./db/db.json"));
});

// GET `*` for the route to the `index.html` homepage
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// `POST /api/notes` to receive a new note saved on the request body, added to the `db.json` file
app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    let notelength = (noteList.length).toString();

    newNote.id = notelength;
    noteList.push(newNote);

    fs.writeFileSync('./db/db.json', JSON.stringify(noteList));
    res.json(noteList);
});

// Delete the note according to its id
app.delete('/api/notes/:id', (req, res) => {
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    let noteId = (req.params.id).toString();

    //Filter all notes that do not have a matching id and save them as a new array while the note with the matching id will be deleted
    noteList = noteList.filter(selected => {
        return selected.id != noteId;
    })

    // Write the updated data to db.json and display the updated note
    fs.writeFileSync('./db/db.json', JSON.stringify(noteList));
    res.json(noteList);
});

app.listen(PORT, () =>
    console.log(`Express server listening at http://localhost:${PORT}`)
);