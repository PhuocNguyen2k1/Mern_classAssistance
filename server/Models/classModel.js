const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        require: true
    },
    subject:{
        type: String,
        require: true
    },
    homeworkAmount:{
        type: Int8Array,
        require: true
    },
    attending:{
        type: Int16Array,
        require: true
    }
  
}) 
module.exports = mongoose.model('Classroom',classSchema)