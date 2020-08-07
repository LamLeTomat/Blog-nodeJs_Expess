
class NewsController {
    //GET  /
    index(req, res){
        res.render('news');
    }

    //GET /search
    show(req, res){
        res.send('NEWS DETAIL');
    }

}
module.exports = new NewsController