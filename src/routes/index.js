const searchRoute = require('./search')
const siteRoute = require('./site')

function route(app){
    
    app.use('/search',searchRoute)
    app.use('/',siteRoute)
}

module.exports = route;