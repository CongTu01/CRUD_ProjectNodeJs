const mongoose = require('mongoose')
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema({
 
  name: {type:String},
  description: String,
  img: {type:String,default:""},
  slug:{type:String,slug:'name',unique:true},
  videoId:String,
},{timestamps:true});

module.exports = mongoose.model('course', Course);
