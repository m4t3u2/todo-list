const Todo = require("../entities/Todo");

exports.get = async (req, res, next) => {
  try {
    console.log("Get", req.params.id);
    const response = await Todo.findById(req.params.id);
    res.send(response);
  } catch (e) {
    next(e);
  }
};

exports.getAll = async (req, res) => {
  console.log("Get All");
  const response = await Todo.find();
  res.send(response);
};

exports.add = async (req, res) => {
  console.log("Add");
  const todo = new Todo(req.body);
  const response = await todo.save();
  res.send(response);
};

exports.update = async (req, res) => {
  console.log("Update");
  //TODO
  res.send(response);
};

exports.delete = async (req, res) => {
  console.log("Delete");
  const response = await Todo.findByIdAndDelete(req.params.id);
  res.send(response);
};
