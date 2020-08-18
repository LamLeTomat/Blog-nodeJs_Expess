const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db')

//connect to db
db.connect();

const app = express();
const port = 3000;



app.listen(port, () => console.log(` app listening at http://localhost:${port}`));

//HTTP logger
// app.use(morgan('combined'));

//set up static file is public folder
app.use(express.static(path.join(__dirname,'public')));
//Use midde ware for Post method
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//Template engine
app.engine('hbs', handlebars(
    {
        extname: '.hbs'
    }
));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources','views'));

//route init
route(app);

