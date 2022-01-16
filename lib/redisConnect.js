import {Client} from "redis-om";

const redisClient = new Client();

// Redis Db URL
const redisURL = process.env.REDIS_URL;

async function connect() {
    try {
        if(!redisClient.isOpen()){
            // Connect with Redis Cloud if already not connected
            await redisClient.open(redisURL);
            console.log("Connected to Redis");
        }
    } catch (error) {
       console.log(error); 
    }
}

export default connect;
export {
    connect ,
    redisClient
};