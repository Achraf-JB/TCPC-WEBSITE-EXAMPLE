// import express from "express";
 import mongoose from "mongoose";
 const {Schema} = mongoose;
//  import cors from "cors";
 const userDetailsSchema = new Schema(
    { firstname :String,
      lastname : String,
      email : String,
      phone : String , 
      adresse : String,
      message : String
    }
    ,{
       collection : "users", 
    }
    );
   //  mongoose.model("users",userDetailsSchema);
      const user = mongoose.model("users",userDetailsSchema);
      module.exports= user;