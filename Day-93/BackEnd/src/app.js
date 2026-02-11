const express = require('express');
const cors = require('cors');
const noteModel = require('./models/note.model');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('./public'))
/**
 * POST /api/notes
 * Create a new note
 */
app.post('/api/notes', async (req, res) => {
    try {
        const { title, description } = req.body;

        const note = await noteModel.create({ title, description });

        res.status(201).json({
            message: "Note created successfully",
            note
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * GET /api/notes
 * Fetch all notes
 */
app.get('/api/notes', async (req, res) => {
    try {
        const notes = await noteModel.find();

        res.status(200).json({
            message: "Notes fetched successfully",
            notes
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * DELETE /api/notes/:id
 * Delete note by ID
 */
app.delete('/api/notes/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await noteModel.findByIdAndDelete(id);

        res.status(200).json({
            message: "Note deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * PATCH /api/notes/:id
 * Update description
 */
app.patch('/api/notes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;

        await noteModel.findByIdAndUpdate(id, { description });

        res.status(200).json({
            message: "Note updated successfully"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname ,"..", "/public/index.html"))
})


module.exports = app;
