const mongoose = require('mongoose');
const TodoSchema= new mongoose.Schema({
    todo:{
        type:String,
    }
},{timeStamp:true})

const Todo = mongoose.model('ToDo',TodoSchema)
module.exports = Todo