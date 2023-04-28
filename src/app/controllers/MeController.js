const { error } = require('console');
const Course = require('../models/Course');
const {
  mongooseToObject,
  mutipleMongooseToObject,
} = require('../../util/mongoose');
const { param } = require('../../routes/news');

class MeController {
  // GET /stored/courses
  storeCourses(req, res, next) {
    Course.find()
      .then((courses) =>
        res.render('me/stored-courses', {
          courses: mutipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }
}

module.exports = new MeController();
