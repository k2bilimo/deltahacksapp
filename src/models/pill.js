const mongoose = require('mongoose')
const config = require('./database')

const pillSchema = mongoose.Schema({
    pillId : {
        type : Number
    },
    pillName :{
        type : String
    },
    pillDescription:{
        type : String
    },
    pillTimes :{
        type: Array[Date]
    }
})

const Pill = module.exports = mongoose.model('Pill', pillSchema)
module.exports.getPillById = function (id, callback){
    Pill.findById(id,callback)
}
module.exports.getPillByName = function(pillName, callback){
    const query = {pillName: pillName}
    Pill.findOne(query,callback)
}