const express = require('express');
const {adminAuth} =require('./middelware/adminAuth')
const port = 3000

const app = express();
// app.get('/about', (res, req)=>req.send('fffff'))
app.use('/admin',adminAuth)
  app.get('/admin/getUser',(req,res)=>{

   res.send('admin getiing user')
   
  })
 app.get('/admin/getFeed',(req,res)=>{

   res.send('admin getiing feed')
   
  })

  app.get('/loging' , (req,res)=>{
      res.send('logging')
  })
app.listen(3000, ()=>console.log('Listning 3000'))