const Course = require('../model/Course')
const { OneObject} = require('../../util/mongo')
class MeController {
        //get /Me/course/store

        store(req,res)
        {
            Promise.all([Course.find({}), Course.countDocumentsDeleted()])
                .then(([courses,CountDeleted])=>{
                    courses = courses.map(courses=>courses.toObject())
                    res.render('me/store_courses',{
                        CountDeleted,
                        courses
                    })
                }
                )
          
        }
        trash(req,res)
        {

            Course.findDeleted({})
             .then((courses)=>{
                 courses = courses.map(courses=>courses.toObject())
                 res.render('me/trash_courses',{courses})
                 //res.render('me/course/store',{courses:OneObject(courses)})
             })
         }

}

module.exports = new MeController;