const Todo = require("../model/todo.model");

const todoPost = async (req, res) => {
  try {
    console.log(req.body);
    const { todo } = req.body;
    const resp = await Todo.create({ todo });
    return res.status(200).json({ message: "todo Submitted", resp });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const getTodoRoute = async (req, res) => {
  try {
    const resp = await Todo.find();
    return res.status(200).json(resp);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
module.exports = { todoPost, getTodoRoute };
