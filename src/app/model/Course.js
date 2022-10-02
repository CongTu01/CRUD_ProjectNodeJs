const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete')
var slug = require('mongoose-slug-generator');



const Course = new Schema({
 
  name: {type:String},
  description: String,
  img: {type:String,default:""},
  slug:{type:String,slug:'name',unique:true},
  videoId:String,
},{timestamps:true});

//add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete,{
  deletedAt : true,
   overrideMethods : 'all' ,});
module.exports = mongoose.model('course', Course);
