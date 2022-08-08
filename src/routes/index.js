const searchRoute = require("./search");
const siteRoute = require("./site");
const checkRoute = require('./check');

function route(app) {
  app.use("/search", searchRoute);
  
  app.use('/check',checkRoute)

  app.use("/", siteRoute);

}

module.exports = route;
