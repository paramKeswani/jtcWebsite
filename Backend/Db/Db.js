// const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://2021paramkeswani:LwLh4JnycyGbtYOx@cluster0.x633p.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0",
    // { useNewUrlParser: true, useUnifiedTopology: true }
  );

  const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    phoneNumber: Number,
    GstNumber: String,
    otp: String,
    otpExpiration: Date,
   
});

const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  // password: String,
  phoneNumber: String,
  // GstNumber: String,
  // otp: String,
  // otpExpiration: Date,
 
} , {collection : "admins"}
);

const ItemSchema = new mongoose.Schema({
  // Schema definition here
  itemName: String,

  category: String,
  rate : Number,
  quantity : Number,
  // cloudinary_id: {
  //   type: String,
  // }, 
  //  image_url: {
  //   type: String,
  //   required: false,
  // },



  
} , {collection : "items"}
);

  const User = mongoose.model('User', UserSchema);
  const Admin = mongoose.model('Admin', AdminSchema);
  const Item = mongoose.model('Item', ItemSchema);

  // Admin.insertOne({
  //   username : 'param',
  //   phoneNumber : '9420874679',
  // }) ;

  
  // Admin.insertOne({
  //   username : 'param',
  //   phoneNumber : '9307802882',
  // });


  // we use function to do things in js 




// LwLh4JnycyGbtYOx

module.exports = { User, Admin ,Item }