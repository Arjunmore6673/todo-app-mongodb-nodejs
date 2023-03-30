import { Schema, model } from 'mongoose';


const todoSchema = new Schema({
    desc: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true
    }
});


const Todo = model('Todo', todoSchema)
export default Todo;