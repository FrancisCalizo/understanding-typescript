import express, { Request, Response, NextFunction } from 'express';

import todoRoutes from './routes/todos';

const app = express();

app.use(express.json());

app.use('/todos', todoRoutes);

// With 4 Parameters, this will be a Error Middleware Function
// The Error parameter will be the first argument. You will need to specify types
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
