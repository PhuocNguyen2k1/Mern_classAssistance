const express = require('express')

const {getClass, getSingleClass, createClass, deleteClass, updateClass, getHomework, getSingleHwork, createHomework, deleteHomework, updateHwork} = require('../Controllers/classController')

const router = express.Router()
//------------------------------------- class route
//POST a new class route
router.post('/',createClass)
//GEt all class
router.get('/id:',getClass)
//GEt a class
router.get('/id:',getSingleClass)
//DELETE a class
router.delete('/id:',deleteClass)
//PACTH a class
router.patch('/id:',updateClass)
//------------------------------------- homework route
//POST a new class route
router.post('/',createHomework)
//GEt all class
router.get('/id:',getHomework)
//GEt a class
router.get('/id:',getSingleHwork)
//DELETE a class
router.delete('/id:',deleteHomework)
//PACTH a class
router.patch('/id:',updateHwork)