const { default: mongoose } = require('mongoose')
const Class = require ('../Models/classModel')
const Homework = require('../Models/homeworkModel')

//------------------------------------------------------------classroom-------------------------------------------------------------//
// get all class 
const getClass = async (req, res) =>{
    const classrooms = await Class.find({}).sort({createAt: -1})
    res.status(200).json(classrooms) 
}

// get single class
const getSingleClass = async (req, res) =>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'There no such class'})
      }
    
      const classroom = await Class.findById(id)
    
      if (!classroom) {
        return res.status(404).json({error: 'There no such class'})
      }
      
      res.status(200).json(classroom)
} 

// create a new classroom
const createClass = async (req, res ) => {
    const {title, date, subject, homeworkAmount } = req.body

    let emptyfield = []

    if(!title){
        emptyfield.push('title')
    }
    if(!date){
        emptyfield.push('title')
    }
    if(!subject){
        emptyfield.push('subject')
    }
    if(!homeworkAmount){
        emptyfield.push('homeworkAmount')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    try{
        const classroom = await Class.create({title, date, subject, homeworkAmount })
         res.status(200).json('Success to create')
    }catch(error){
         res.status(400).json({error: error.message})
    }
}

// delete a class 

const deleteClass = async (req, res ) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'There no such class'})
      }
    
      const classroom = await Class.findOneAndDelete({_id: id})
    
      if (!classroom) {
        return res.status(404).json({error: 'There no such class'})
      }
      
      res.status(200).json(classroom)
}

// update a class

const updateClass = async (req, res ) =>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'There no such class'})
      }
    
      const classroom = await Class.findOneAndUpdate({_id: id},{
        ...req.body
      })
    
      if (!classroom) {
        return res.status(404).json({error: 'There no such class'})
      }
      
      res.status(200).json(classroom)
}
//------------------------------------------------------------homework-------------------------------------------------------------//

// get all homework 
const getHomework = async (req, res) =>{
    const homeworks = await Homework.find({}).sort({createAt: -1})
    res.status(200).json(homeworks) 
}

// get single homework
const getSingleHwork = async (req, res) =>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'There no such homework'})
      }
    
      const homework = await Homework.findById(id)
    
      if (!classroom) {
        return res.status(404).json({error: 'There no such homework'})
      }
      
      res.status(200).json(homework)
} 

// create a new homework

const createHomework = async(req, res) =>{
    const {title, date,  deadline, description, file } = req.body

    let emptyfield = []

    if(!title){
        emptyfield.push('title')
    }
    if(!date){
        emptyfield.push('date')
    }
    if(!deadline){
        emptyfield.push('deadline')
    }
    if(!description){
        emptyfield.push('description')
    }
    if(!file){
        emptyfield.push('file')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    try{
        const classroom = await Class.create({title, date,  deadline, description, file })
         res.status(200).json('Success to create')
    }catch(error){
         res.status(400).json({error: error.message})
    }
}
// delete the homework
const deleteHomework = async (req, res) =>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'There no such homework'})
      }
    
      const homework = await Homework.findOneAndDelete({_id: id})
    
      if (!classroom) {
        return res.status(404).json({error: 'There no such homework'})
      }
      
      res.status(200).json(homework)
} 
//update the homework
const updateHwork = async (req, res) =>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'There no such homework'})
      }
    
      const homework = await Homework.findOneAndUpdate({_id: id}, {
        ...req.body
      })
    
      if (!classroom) {
        return res.status(404).json({error: 'There no such homework'})
      }
      
      res.status(200).json(homework)
} 

module.exports = {getClass, getSingleClass, createClass, deleteClass, updateClass, getHomework, getSingleHwork, createHomework, deleteHomework, updateHwork}