const express = require('express')
const morgan = require('morgan')
const path =require('path')
const { engine } = require ('express-handlebars');
const sass = require('node-sass');
const app = express()
const port = 3000

const route = require('./routes/index') 

app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());
//http logger
app.use(morgan('combined'))


app.use(express.static(path.join(__dirname,"public")));



//template engil
app.engine('hbs', engine({extname:".hbs"}))
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'resource/views'));

//Routes init
route(app);

app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})

app.get('/search', (req, res) => {
  res.render('search');
})
app.post('/search', (req, res) => {
  res.send('');
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})