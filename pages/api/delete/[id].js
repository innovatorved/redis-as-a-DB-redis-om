import connect, { redisClient } from "../../../lib/redisConnect";
import noteSchema from "../../../lib/defineSchema";

import { Repository } from "redis-om";

export default async function (req , res){
    try {
        await connect();
        const noteId = req.query.id;
        const noteRepository = new Repository(noteSchema, redisClient);
        const note = await noteRepository.remove(noteId);
        res.status(200).json({success:true , note});
    } catch (error){
        res.status(500).json({success:false , error}); 
    }
}