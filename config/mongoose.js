import mongoose from 'mongoose'
//  connect to db.
mongoose.connect('mongodb://localhost/todo_app');


mongoose.connection.on('error', err => {
    console.log(err);
});

// after up and running.
mongoose.connection.once('open', () => {
    console.log('successfully connected to the db.');
});

