import connect, { redisClient } from "../../../lib/redisConnect";
import noteSchema from "../../../lib/defineSchema";

import { Repository } from "redis-om";

export default async function (req , res){
    try {
        await connect();
        const noteRepository = new Repository(noteSchema, redisClient);
        const notes = await noteRepository.search().return.all();
        res.status(200).json({success:true , notes});
    } catch (error){
        res.status(500).json({success:false , error}); 
    }
}