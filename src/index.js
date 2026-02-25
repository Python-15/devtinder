const connectToDB = require('./config/database')
const { v4: uuidv4 } = require('uuid')
const express = require('express');
const cookiesParser =require('cookie-parser')
const User = require('./models/user')
const app = express()
const { validateUserData } = require('./utilss/validateuser')
const bcrypt = require("bcryptjs");
// crreate middelware for accepting json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cookiesParser())
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//home

app.get('/',(req, res)=>{
  
   res.render('loging')
})
app.post('/login',async (req,res)=>{

  try{

    res.cookie('name','cookieshaiyeh')
    const {email,password}=req.body
     const user = await User.findOne({emailId:email})
     const isPassowrdCorrect  = await bcrypt.compare(password, user.password);
     if(user.emailId!=email){
      res.status(401).send('please enter valid email address')
     }
     if(isPassowrdCorrect){
      //jwt aut


       res.send(`${user.firstName} has logging succfuly`)
     }
     else{
      res.status(401).send('please enter valid password')
     }
    

  }catch (err){

  }
})



  //signup api
  app.post('/signup', async(req,res)=>{
   console.log(req)
  try{
     validateUserData(req)
      const saltRounds = 10;
       const hash = await bcrypt.hash(req.body.password, saltRounds);
  //create new instance of user model with shcema

 
console.log
  const newUser = new User({
  userID: uuidv4(),
  firstName: req.body.firstName,
  lastName: req.body.lastName,
  emailId:req.body.email,
  password:hash

 
});
 
 await newUser.save()
  res.send(`${newUser.firstName} user added to db `)
  }catch(err){
    res.status(400).send(`err saving the user  ${err}`)
  }
})



//login api

app.post('/login',async (req,res)=>{

  try{
    const {email,password}=req.body
     const user = await User.findOne({emailId:email})
     const isPassowrdCorrect  = await bcrypt.compare(password, user.password);
     if(user.emailId!=email){
      res.status(401).send('please enter valid email address')
     }
     if(isPassowrdCorrect){
      //jwt aut


       res.send(`${user.firstName} has logging succfuly`)
     }
     else{
      res.status(401).send('please enter valid password')
     }
    

  }catch (err){

  }
})
connectToDB().then(()=>{
   console.log('database connection created')
   app.listen(3333,()=>{
    console.log('listning to port 3333')
   })
}).catch((err)=>{
  console.log('failed to connect to server')
})
