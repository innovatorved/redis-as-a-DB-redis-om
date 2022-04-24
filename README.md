
# redis-om ( redis object mapping ) 

Basic of CRUD operation in redis database.
Use redis as primary database using redis-om

## Environment Variable

Set your Redis Database
```env
    REDIS_URL=___you-redis-cloud-url__
```


## Schema Design

```js
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
```
## API Reference

#### Create Operation

```
  POST /api/createnote
```

| Parameter | Type     |
| :-------- | :--------|
|   `body`  | `json`   |

##### request body
```json
{
    "title" : "title",
    "description" : "Description",
    "tags" : "General"
}
```

#### Read operation

```
    GET /api/fetch/{id}      # fetch specific note
    GET /api/fetch/          # fetch all notes
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `  id   ` | `string` | **Not Required**.          |


#### Update operation

```
    PUT /api/update/{id}
```
| Parameter | Type     |
| :-------- | :--------|
|   `body`  | `json`   |

##### request body
```json
{
    "title" : "updated title",
    "description" : "updated Description",
    "tags" : "General"
}
```

#### Delete Operation

```
    GET /api/delete/  
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `  id   ` | `string` |        **Required**.       |


#### Search inside the note

```
  GET /api/search?q=__string__
 ```

|   Query   | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `   q   ` | `string` |        **Required**.       |


## License

[MIT](https://choosealicense.com/licenses/mit/)

  
## Authors

- [Ved Gupta](https://www.github.com/innovatorved)

  
## 🚀 About Me
I'm a Developer i will feel the code then write .

  
## Support

For support, email vedgupta@protonmail.com
