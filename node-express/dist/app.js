"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = express_1.default();
app.use(express_1.default.json());
app.use('/todos', todos_1.default);
// With 4 Parameters, this will be a Error Middleware Function
// The Error parameter will be the first argument. You will need to specify types
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
