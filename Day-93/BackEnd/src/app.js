const express = require('express');

const app = express();
const noteModel = require('./models/note.model')
const cors = require('cors')
app.use(cors())
app.use(express.json())

/**
 * Post /api/notes
 * -create new note and dave data in mongoDB
 * req.body = {title , description}
 */

app.post('/api/notes',async (req,res)=>{
    const {title , description} = req.body

    const note = await noteModel.create({
        title , description
    })
    res.status(201).json({
        message : "note created succesfully",
        note,
    })
})


/**
 * Get /api/notes
 * fetch alll the notes data from mongodb and send them in the response
 */

app.get('/api/notes',async (req,res)=>{
    const notes = await noteModel.find();
    res.status(200).json({
        message : "Notes fetch successfully",
        notes
    })
})

/**
 * DELETE - /api/notes/id
 * used to delete the data from the monogoDB database
 */

app.delete('/api/notes/:id',async(req,res)=>{
    const id = req.params.id;
    await noteModel.findById()
    res.status(200).json({
        message : "Note delete successfully",
    })
})

/***
 * PATCH - /api/notes
 * used to desc of the note
 * req.body = desc
 */

app.patch('api/notes/:id',async (req,res)=>{
    const id = req.params.id;

    const {description} = req.body
    await noteModel.findByIdAndUpdate(id,{description})

    res.status(200).json({
        message:"Note update successfully"
    })
})
module.exports = app;