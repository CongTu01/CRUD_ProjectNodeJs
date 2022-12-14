const Course = require('../model/Course')
const { OneObject} = require('../../util/mongo')

class CourseController {

    //[GET] /course/slug:
    index(req,res,next) {
      Course.findOne( {slug : req.params.slug})
        .then(course=>{course = course.toObject()   
          res.render('course/show',{course})})
        .catch(next)
    }
  //[Get]/course/create
  create(req,res,next) {
    res.render('course/create')
  }

  //[POST] /course/store
  store(req,res,next) {
  // res.json(req.body)
  req.body.img = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`
   const course = new Course(req.body)
   course.save()
    .then(()=>{res.redirect('/me/course/store')})
    .catch(next)
  }

  //get/course/id/edit
  update(req,res,next) {
    Course.findById( req.params.id)
        .then(courses=>{courses = courses.toObject()   
          res.render('course/update',{courses})})
        .catch(next)

    }
    //[put]/course/:id
    updatefinal(req,res,next) {
      //req yeu cau truyen di 
      //res phan hoi 
      Course.updateOne({_id:req.params.id},req.body)
        .then(()=>{res.redirect('/me/course/store')})
        .catch(next)
    }
    //[delete]/course/:id
    delete(req,res,next)
    {
      Course.delete({_id:req.params.id})
      .then(()=>{res.redirect('back')})
      .catch(next)
    }
      //[patch]/course/:id/restore
      restore(req,res,next) {
        Course.restore({_id:req.params.id})
        .then(()=>{res.redirect('back')})
        .catch(next)
      }
//  //[delete]/course/:id/vinhvien
      deleteFinal(req,res,next){
        Course.deleteOne({_id:req.params.id})
      .then(()=>{res.redirect('back')})
      .catch(next)
      }
    //form form action 
    formaction(req,res,next)
    {
      res.json(req.body)
    }
}

module.exports = new CourseController;