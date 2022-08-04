const express = require('express')
const morgan = require('morgan')
const path =require('path')
const { engine } = require ('express-handlebars');
const sass = require('node-sass');
const app = express()
const port = 3000
//http logger
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,"public")));
console.log('log:'+path.join(__dirname,"public"));


//template engil
app.engine('hbs', engine({extname:".hbs"}))
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'resource/views'));

app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})