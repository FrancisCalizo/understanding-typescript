import { RequestHandler } from 'express';

import { Todo } from '../models/todo';

let TODOS: Todo[] = [];

// RequestHandler Type is the Same as gettint the separate
// Request, Response, and NextFunction types!
export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.floor(Math.random() * 100).toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: 'Created the Todo', createdTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ message: 'Get Todos', todos: TODOS });
};

// RequestHandler takes in a Generic for the req.params property
export const updateTodos: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id;
  const newText = (req.body as { text: string }).text;
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

export const deleteTodo: RequestHandler = (req, res, next) => {
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
