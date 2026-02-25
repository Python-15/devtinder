const mongoose = require('mongoose');

const userSChema = mongoose.Schema({
  userID:{
   type:String
  },
  firstName:{
    type: String
  },
  lastName:{
    type: String
  },
  emailId:{
    type:String
  },
  password:{
    type:String
  },
  age:{
    type:Number 
  },
  gender:{
    type:String
  }
})

const User = mongoose.model('User', userSChema);
module.exports =User