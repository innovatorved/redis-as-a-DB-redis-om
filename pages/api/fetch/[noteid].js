import connect, { redisClient } from "../../../lib/redisConnect";
import noteSchema from "../../../lib/defineSchema";

import { Repository } from "redis-om";

export default async function (req , res){
    try {
        await connect();
        const noteId = req.query.noteid;
        const noteRepository = new Repository(noteSchema, redisClient);
        const note = await noteRepository.fetch(noteId);
        res.status(200).json({success:true , note});
    } catch (error){
        res.status(500).json({success:false , error}); 
    }
}