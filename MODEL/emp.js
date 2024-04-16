const mongoose = require('mongoose')
const schema = mongoose.Schema({
    name:String,
    location:String,
    position:String,
    salary:Number
})

const empModel = mongoose.model('emp',schema);
module.exports = empModel;