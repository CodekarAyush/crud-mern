const express = require('express');
const connectDb = require('./config/db.config');
const app = express()
const cors = require('cors');
require('dotenv').config()
const todoRoute = require('./routes/todo.route')
const port = process.env.PORT || 8000
connectDb()

app.use(cors())
app.use(express.json())
app.use('/api',todoRoute)


app.get('/test',(req,res)=>{
    res.send("server started")
})

app.listen(port,()=>{
    console.log(`server started at port : ${port}`);
})