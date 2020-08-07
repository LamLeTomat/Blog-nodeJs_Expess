const Course = require('../models/Course');
class SiteController {
    //GET  /news
    index(req, res){
        // res.render('home');
        Course.find({}, (err, courses)=>{
            if(!err){
                res.json(courses);
                return;
            } 
            res.status(400).json({error: 'ERROR'});
        });
        // res.json({
        //     name: 'test'
        // });
        
    };

    //GET /news/:slug
    search(req, res){
        res.render('search');
    }

}
module.exports = new SiteController