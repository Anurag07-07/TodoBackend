const express = require('express');
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 10000;


//middleware to parse  json request body 
app.use(express.json());

//load routes
const todoRoutes = require("./routes/todos");
//mount the todo API routes
app.use("/api/v1",todoRoutes);

//start Server 
app.listen(PORT,()=>{
  console.log(`Server started successfully at ${PORT}`);
})


//db connection
const dbConnect = require('./config/database');
dbConnect();

app.get("/",(req,res)=>{
  res.send(`<h1>This is HomePage</h1>`)
})

