
const validator = require('validator')
const validateUserData =(req)=>{
const {
  firstName,
  email,
  password,
} =req.body


  if(!firstName ){
    throw new Error('name is not found')
  }
  else if(!validator.isEmail(email)){
    throw new Error('email should be valid')
  }
  else if(!validator.isStrongPassword(password)){
    throw new Error('Please endter strng password')
  }
  
}

module.exports={validateUserData}