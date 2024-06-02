import express from "express";
import {Comments} from './DB/manaula.data.js'

const app=express();


app.get('/',(req,res)=>{

    console.log(req.url);
    res.send("hello world !")
});

app.get('/api/comments',(req,res)=>{
    console.log(req.url);

    res.json(Comments)
})



export{app}