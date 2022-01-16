import connect, { redisClient } from "../../../lib/redisConnect";
import noteSchema from "../../../lib/defineSchema";

import { Repository } from "redis-om";

export default async function (req , res){
    try {
        const {title , description , tags} = req.body;
        await connect();
        const noteId = req.query.id;
        const noteRepository = new Repository(noteSchema, redisClient);
        const note = await noteRepository.fetch(noteId);
        note.title = title;
        note.description = description;
        note.tags = tags;
        const id = await noteRepository.save(note);
        res.status(200).json({success:true , note , id});
    } catch (error){
        res.status(500).json({success:false , error}); 
    }
}