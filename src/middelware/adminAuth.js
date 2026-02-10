

const adminAuth = (req,res,next)=>{
   console.log('adminuth is getting checked ')

   const token ='xyz'
   const isAdmin = token==='xyz'
   if(!isAdmin){
    res.satus(401).send('user is not admin');
   }
   else{

    console.log('getting next')
    next()
   }

}

module.exports={adminAuth}