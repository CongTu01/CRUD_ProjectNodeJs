const Course = require('../model/Course')
const { OneObject} = require('../../util/mongo')
class MeController {
        //get /Me/course/store

        store(req,res)
        {
           Course.find({})
            .then((courses)=>{
                courses = courses.map(courses=>courses.toObject())
                res.render('me/store_courses',{courses})
                //res.render('me/course/store',{courses:OneObject(courses)})
            })
        }

}

module.exports = new MeController;