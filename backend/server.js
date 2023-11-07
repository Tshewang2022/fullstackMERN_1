const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//this will allow us to connect with the dotenv file
require("dotenv").config();

const app = express();

//the process of connection the .env file with the server.js file
const port = process.env.PORT || 5000;
//establishing the db connection using the ..env file, where CONN is the variable that i used to stored the link
const uri = process.env.CONN;
mongoose.connect(uri, { useNewParser: true, useCreateIndex: true });

//this is the middleware, first one will allow us to interact with other webserver
app.use(cors());
//the second middleware will convert the raw data to json, where it can be store inside the db
app.use(express.json());

app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});
