const express = require('express')
const morgan = require('morgan')
const path =require('path')
const { engine } = require ('express-handlebars');

const methodOverride = require('method-override')
const app = express()
const port = 3000
const  handlebars =require ('express-handlebars');

const route = require('./routes/index') ;
const db =  require('./config/db')
db.connect();

app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());
//http logger
app.use(morgan('combined'))


app.use(express.static(path.join(__dirname,"public")));

//auto change method
app.use(methodOverride('_method'))

//template engil
app.engine('hbs', handlebars.engine({extname:".hbs",
helpers: {
  sum(a,b) { return a+b; }
}}),
)
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'resource/views'));

app.get("/middleware",function(req,res)
{
  res.json({message:"hello middleware"})
})

//Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})