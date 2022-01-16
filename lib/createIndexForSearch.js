import connect, { redisClient } from "./redisConnect";
import noteSchema from "./defineSchema";

import { Repository } from 'redis-om';

async function CreateIndex(){
    try {
        await connect();
        const noteRepository = new Repository(noteSchema, redisClient);
        const res = await noteRepository.createIndex();
        return res;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function DropIndex(){
    try {
        await connect();
        const noteRepository = new Repository(noteSchema, redisClient);
        const res = await noteRepository.dropIndex();
        return res;
    } catch (error) {
        console.log(error);
        return null;   
    }
}

export {
    CreateIndex,
    DropIndex
};