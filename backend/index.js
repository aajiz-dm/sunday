import dotenv from "dotenv";
import { DBConnection } from "./DB/dbConnections.DB.js";
import {app} from './app.js';


 dotenv.config({path:'.env'});

let port = process.env.PORT;

DBConnection()
.then(()=>{

app.listen(port,()=>{
console.log(`App is listening on the port http://localhost:${port}`);
})

})
.catch()