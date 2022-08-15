const searchRoute = require("./search");
const siteRoute = require("./site");
const checkRoute = require('./check');
const courseRoute = require('./course')
const meRoute = require('./me')

function route(app) {
  app.use("/search", searchRoute);
  app.use("/course", courseRoute);
  app.use('/check',checkRoute)
  app.use('/me',meRoute)
  app.use("/", siteRoute);

}

module.exports = route;
