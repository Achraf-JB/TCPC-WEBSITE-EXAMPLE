// const express = require("express");
// const mongoose = require("mongoose");
import express from "express";

 import mongoose from "mongoose";
import cors from "cors";
import "../components/userDetails.js";
const app = express();

// import user from "../components/userDetails.js";
app.use(express.json());
app.use(cors());
const url ="mongodb+srv://achraf:achrafjarboui@projet-final.aifsehr.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(mongoUrl,{
//    useNewUrlParser:true
// }).then(()=>{console.log("connected to dataBase");})
// .catch(e=>console.log(e))


async function connect(){
try{
await mongoose.connect(url);
console.log("connect to db");

}catch(error){
console.log(error);
}
}
connect();


 
const user =mongoose.model("users");
app.post("/join",async (req,res)=>{
    console.log(req.body);
    // const {firstname,lastname,email,phone,adresse,message} =req.body;
    try{
        // await
        await user.push({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            phone:req.body.phone,
            adresse:req.body.adresse,
            message:req.body.message
        });
        res.send({status:"ok"});
    }catch(error){
       res.send({status:"error"});
    }
 });

 app.listen(5000,()=>{
    console.log("server is running");
    });
