import Todo from "../models/todo.js"


const todoList = async (req, res) => {
    const list = await Todo.find({})
    return res.render('todo', { title: 'todo app', list })
}
const addTodo = async (req, res) => {
    console.log('REQ', req.body)
    await Todo.create(req.body)
    // console.log(added, 'added');
    return res.redirect('back');
}
const deleteTodo = async (req, res) => {
    console.log('REQ', req.params);
    const ids = (req.params.ids).split(',');
    await Todo.deleteMany({ _id: { $in: ids } });
    return res.redirect('back');

}


export default {
    todoList,
    addTodo,
    deleteTodo
}