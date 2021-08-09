const express = require('express');
const path = require('path');
const fs = require('fs');
const notes = require('./db/db.json');
const PORT = 3001;

const app = express();

// Sets up the Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));

// `GET /` to return the `index.html` file
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '.public/index.html'))
);

// GET request for all notes to return the `notes.html` file.
// `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
app.get('/api/notes', (req, res) => {
    // Send a message to the client
    res.sendFile(path.join(__dirname, '.public/notes.html'));
    res.json(`${req.method} request received to get notes`);

    // Log our request to the terminal
    console.info(`${req.method} request received to get notes`);
    return res.json(notes);
});

// `POST /api/notes` to receive a new note saved on the request body, added to the `db.json` file.
app.post('/api/notes', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a note`);

    // Destructuring assignment for the items in req.body
    const {
        title,
        text
    } = req.body;

    // If all the required properties are present
    if (title && text) {
        // Variable for the object we will save
        const newNote = {
            title,
            text,
        };

        // Obtain existing notes
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                // Convert string into JSON object
                const parsedNotes = JSON.parse(data);

                // Add a new review
                parsedNotes.push(newNote);

                // Write updated reviews back to the file
                fs.writeFile(
                    './db/db.json',
                    JSON.stringify(parsedNotes, null, 4),
                    (writeErr) =>
                    writeErr ?
                    console.error(writeErr) :
                    console.info('Successfully updated notes!')
                );
            }
        });

        const response = {
            status: 'success',
            body: newNote,
        };

        console.log(response);
        res.json(response);
    } else {
        res.json('Error in posting note');
    }
});

app.listen(PORT, () =>
    console.log(`Express server listening at http://localhost:${PORT}`)
);