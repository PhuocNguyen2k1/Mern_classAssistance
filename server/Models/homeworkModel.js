const express = require('express')
const { default: mongoose } = require('mongoose')

const Schema = mongoose.Schema;

const homeworkSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        require: true
    },
    deadline:{
        type: Date,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    file:{
        type: File,
        require: true
    },
})
module.exports = mongoose.model(homeworkSchema)