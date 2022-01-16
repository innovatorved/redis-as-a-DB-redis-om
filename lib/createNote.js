import { Repository } from 'redis-om';

// imported some dependecies Note schema, Note Class & redis connection , redisClient info
import connect, { redisClient } from "./redisConnect";
import noteSchema, { Note } from "./defineSchema";


async function CreateNote(data) {
    try {
        await connect();
        const noteRepository = new Repository(noteSchema, redisClient);
        const note = noteRepository.createEntity(data);
        const noteId = await noteRepository.save(note);
        return noteId;

    } catch (error) {
        console.log(error + "error in connecting to redis");
        return null;
    }
}

export default CreateNote;