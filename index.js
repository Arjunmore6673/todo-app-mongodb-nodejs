import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 8080;

// use express router
app.use(express.urlencoded());
app.use(express.static('assets'));


app.use('/', routes);



app.set('view engine', 'ejs')
app.set('views', './views')

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});
