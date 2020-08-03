const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

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
app.set('views',path.join(__dirname,'resources/views'));

//route 
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/search', (req, res) => {
    res.render('search');
});

app.post('/search', (req, res) => {
    res.render('search');
    console.log(req.body);
});