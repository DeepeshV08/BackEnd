const express = require('express');

const app = express();

const notes = [];

app.use(express.json());

app.post('/notes',(req,res) => {

    notes.push(req.body);

    res.status(201).json({
        message : 'noe created successfully',
    })
})

app.get('/notes' , (req,res) => {
    res.status(200).json({
        notes :notes,
    })
})

app.delete('/notes/:index' , (req,res) => {
    const index = Number(req.params.index);

    delete notes[index];

    res.status(200).json({
        message : 'note deleted successfully',
    })
})

app.patch('/notes/:index' ,(req , res) => {
    const index = req.params.index;
    notes[index] = req.body;

    res.status(200).json({
        message : 'note updated successfully', 
    })
})
app.get('/',(req,res) =>{
    res.send('Hello from Home Page')
})


module.exports = app;