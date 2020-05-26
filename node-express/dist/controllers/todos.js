"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("../models/todo");
let TODOS = [];
// RequestHandler Type is the Same as gettint the separate
// Request, Response, and NextFunction types!
exports.createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.floor(Math.random() * 100).toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created the Todo', createdTodo: newTodo });
};
exports.getTodos = (req, res, next) => {
    res.status(200).json({ message: 'Get Todos', todos: TODOS });
};
// RequestHandler takes in a Generic for the req.params property
exports.updateTodos = (req, res, next) => {
    const id = req.params.id;
    const newText = req.body.text;
    let notFound = true;
    const newTodos = TODOS.map((todo) => {
        if (todo.id === id) {
            notFound = false;
            return { ...todo, text: newText };
        }
        return todo;
    });
    if (notFound) {
        throw new Error("Couldn't find todo!");
    }
    TODOS = newTodos;
    res.json({ message: 'Update todos', todos: TODOS });
};
exports.deleteTodo = (req, res, next) => {
    const id = req.params.id;
    let notFound = true;
    const newTodos = TODOS.filter((todo) => {
        if (todo.id === id) {
            notFound = false;
        }
        return todo.id !== id;
    });
    if (notFound) {
        throw new Error("Couldn't find todo!");
    }
    TODOS = newTodos;
    res.json({ message: 'Deleted todos', todos: TODOS });
};
