"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("../models/todo");
const TODOS = [];
// RequestHandler Type is the Same as gettint the separate
// Request, Response, and NextFunction types!
exports.createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created the Todo', createdTodo: newTodo });
};
