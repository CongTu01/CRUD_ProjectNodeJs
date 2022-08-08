const Course = require('../model/Course')
const {mutipleObject} = require('../../util/mongo')
class SiteController {

    //[GET] /home
    index(req,res,next) {
        Course.find({})
          .then(courses =>{ 
            courses = courses.map(course=>course.toObject())
            res.render('home',{courses})})
          .catch(next)
    };

    //[GET] /news
    new(req,res)
    {
        res.render('news')
    }


}

module.exports = new SiteController;