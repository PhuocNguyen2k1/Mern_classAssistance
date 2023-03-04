const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    // firstname:{
    //     value: String,
    //     require: true,
    // },
    // lastname: {
    //     value: String,
    //     require: true,
    // },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    // address: {
    //     value: String,
    //     require: true,
    // },
    // position: {
    //     value: String,
    //     require: true,
    // },
});

userSchema.statics.signup = async function(email, password){
    //validation
    if(!email || !password){
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough')
    }
    //check if email is unique
    const exist = await this.findOne({email})
    if(exist){
        throw Error('This email already exist');
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({email, password: hash})

    return user
}
// static signin method 
userSchema.static.signin = async function(email, password){
    if(!email || !password){
        throw Error('All fields must be filled')
    }

    const exist = await this.findOne({email})

    if(!user){
        throw Error('incorect email')
    }
    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error ("incorect password")
    }

    return user
}

module.exports = mongoose.model('user', userSchema);
