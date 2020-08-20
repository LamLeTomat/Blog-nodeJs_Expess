const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');

const route = require('./routes');
const db = require('./config/db');

//connect to db
db.connect();

const app = express();
const port = 3000;



app.listen(port, () => console.log(` app listening at http://localhost:${port}`));

//HTTP logger
// app.use(morgan('combined'));

app.use(methodOverride('_method'));

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
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a+b,
        }
    }
));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources','views'));

//route init
route(app);

