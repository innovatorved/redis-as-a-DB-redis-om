import {Schema , Entity} from "redis-om";

// define class inherite Entity
class Note extends Entity {};

// define schema for Note
const noteSchema = new Schema(
    Note, {
        title : {type : "string" , textSearch: true},
        description : {type : "string" , textSearch: true},
        tags : {type : "string"}
    },
    {
        dataStructure : 'JSON'
    }
);

export default noteSchema;
export {
    noteSchema,
    Note
};