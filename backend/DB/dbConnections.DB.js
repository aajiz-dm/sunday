import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"
import { DBErrorutilis, DBSuccessutilis } from "../utils/success.util.js";




const DBConnection = async ()=>{

try {
    console.log("Connecting..................");
const DBInsatnce= await mongoose.connect(`${process.env.MONGODBAtLAS_URL}/${DB_NAME}`);

// console.log(`DB connection success fully \n Host : ${DBInsatnce.connection.host} \n Name : ${DBInsatnce.connection.name}`);
DBSuccessutilis(DBInsatnce)

console.log(`URL from .env : ${process.env.MONGODBAtLAS_URL}`);

} catch (error) {
    // console.log("DB connection Failed !!!! \n Error"+error);
    DBErrorutilis(error)
    
}


};






export{DBConnection}

