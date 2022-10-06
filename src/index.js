const express = require('express')
const morgan = require('morgan')
const path =require('path')
const { engine } = require ('express-handlebars');

const methodOverride = require('method-override')
const app = express()
const port = 3000
const  handlebars =require ('express-handlebars');

//midllerware sort
const sortMiddlerware=require('./app/Middlerwares/sortMiddlerwares')

const route = require('./routes/index') ;
const db =  require('./config/db')
db.connect();

app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());
//http logger
app.use(morgan('combined'))

//custom sort middlerware
app.use(sortMiddlerware)

app.use(express.static(path.join(__dirname,"public")));

//auto change method
app.use(methodOverride('_method'))

//template engine
app.engine('hbs', handlebars.engine({extname:".hbs",
helpers: {
  sum(a,b) { return a+b; },
  sortable:(typename,sort)=>{
    const checkcolumn = typename===sort.column? sort.type : 'default';
    const icons={
      default:'code-outline',
      asc:'caret-up-outline',
      desc:'caret-down-outline'
    }
    const types ={
      default:'desc',
      asc:'desc',
      desc:'asc'
    }
    const  icon = icons[checkcolumn]
    const type  =  types[checkcolumn]
return ` <a href="?_sort&column=${typename}&type=${type}">
<ion-icon name="${icon}"></ion-icon>
</a>`
  }
}}),
)
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'resource/views'));



//Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})