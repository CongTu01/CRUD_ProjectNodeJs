module.exports = {
    mutipleObject :{function(ArrayObject){
        return ArrayObject.map(Object=>{ Object.toObject()})
    }},
    OneObject:{function(Mongoose) {
        return Mongoose?Mongoose.toObject():Mongoose;
    }}
}