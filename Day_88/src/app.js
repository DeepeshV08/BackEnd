// Server create karna
// server ko configure karna


const express = require('express');

const app = express();

const notes = [];

app.use(express.json());

// POST /notes
app.post("/notes",(req,res) => {
    notes.push(req.body);
    console.log(notes);
    res.send("Note Added Successfully");
})

// GET /notes
app.get("/notes" , (req,res) => {
    res.send(notes);
})

app.delete("notes/:index" , (req,res) => {
    console.log(req.params.index);
   delete notes[req.params.index];
    res.send("Note Deleted Successfully");
})
app.get('/' , (req , res) => {
    res.send('Hello world');
})
module.exports = app;