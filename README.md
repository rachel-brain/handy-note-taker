# handy-note-taker
A handy Note Taker application that can be used to easily write and save notes.


## Description
A handy Note Taker application that can be used to write and save notes which uses an Express.js back end and will save and retrieve note data from a JSON file.
    
## Motivation
To develop an app allowing a Business Owner or Manager to write and save notes in order to keep track of important tasks they need to do so that nothing is missed in their busy week.

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save" icon appears in the navigation at the top of the page
WHEN I click on the "Save" icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the "Plus" icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Mock-Up
The following images show the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets/11-express-homework-demo-01.png)

![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.](./Assets/11-express-homework-demo-02.png)

## Installation
The application will be launched by typing the following commands in the terminal to run the back-end server within the Develop folder:

```bash
npm install
npm start
```

## Usage
1. When the server runs, you will see the comment "Express server listening at http://localhost:3001".

2. When this link `http://localhost:3001/` is copied into the terminal, you will be taken to the homepage.

3. Click the "Get Started" button and you will be directed to the Note Taker page.

4. Fill out the necessary fields (Note Title and Note Text) and click on the "disc" icon at the top right to save each note.

5. Check the content of `db/db.json` to see that the new note/s have been entered along with any previous notes.

6. If you want to delete any of the notes, click on the "bin" icon at the right of the note on the left hand side of the page.

## Deployment on Heroku
On Heroku


## Deployment on GitHub
https://github.com/rachel-brain/handy-note-taker