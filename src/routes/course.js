const expess = require('express');
const Course = expess.Router();

const CourseController = require('../app/controllers/CourseController');

Course.get('/create',CourseController.create)
Course.post('/store',CourseController.store)
Course.get('/:id/edit',CourseController.update)
Course.post('/form-action',CourseController.formaction)
Course.put('/:id',CourseController.updatefinal)
Course.patch('/:id/restore',CourseController.restore)
Course.delete('/:id',CourseController.delete)
Course.delete('/:id/vinhvien',CourseController.deleteFinal)
Course.get('/:slug',CourseController.index)

module.exports = Course;