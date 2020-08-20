const newsRouter = require('./news.route');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
    
    app.use('/news', newsRouter);
    app.use('/courses',coursesRouter);
    app.use('/', siteRouter);
    app.use('/me',meRouter);
    
};
module.exports = route;