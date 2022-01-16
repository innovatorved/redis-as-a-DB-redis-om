import connect, { redisClient } from "../../lib/redisConnect";
import noteSchema from "../../lib/defineSchema";

import { Repository } from "redis-om";

export default async function (req , res){
    try {
        await connect();
        const {q} = req.query;
        const noteRepository = new Repository(noteSchema, redisClient);
        const notes = await noteRepository.search()
        .where('tags').eq(q)
        .or('title').matches(q)
        .or('description').matches(q)
        .return.all();

        res.status(200).json({success:true , notes});
        
    } catch (error){
        console.log(error);
        res.status(500).json({success:false , error}); 
    }
}