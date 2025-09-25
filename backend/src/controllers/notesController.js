import Note from "../models/Note.js";

export async function getAllNotes (_, res) {
    try {
        const notes = await Note.find().sort({createdAt:-1}); // Sort by newest first
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function getNoteById (req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message:"Note not found"});
        res.status(200).json(note);
    } catch (error) {
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function createNote (req, res) {
    try {
        const {tittle, content} = req.body;
        const note = new Note({tittle:tittle, content:content});

        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNote controller", error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function updateNote (req, res) {
    try {
        const {tittle, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            {tittle, content},
            {
                new:true,
            }
        );

        if(!updatedNote) return res.status(404).json({message:"Note not found"});
        res.status(200).json({message:"note updated successfully"});
    } catch (error) {
        console.error("Error in updateNote controller", error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function deleteNote (req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);

        if(!deletedNote) return res.status(404).json({message:"Note not found"});
        res.status(200).json({message:"note deleted successfully"});
    } catch (error) {
        console.error("Error in deleteNote controller", error);
        res.status(500).json({message:"Internal Server Error"});
    }
}