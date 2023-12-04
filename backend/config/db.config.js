const mongoose = require('mongoose');
require('dotenv').config()
const con= process.env
const connectDb = ()=>{
mongoose.connect(`mongodb+srv://${con.DB_USERNAME}:${con.DB_PASSWORD}@todo.1xn24cm.mongodb.net/${con.CLUTER_NAME}?retryWrites=true&w=majority`).then(()=>{
    console.log('connected to the db');
}).catch((err)=>{
    console.log(err);
})
}
module.exports =connectDb