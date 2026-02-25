const mongoose = require('mongoose');


 async function connectToDB(){
    await mongoose.connect('mongodb+srv://raazaditya1599:AneT1GSwKepchoBT@devtinder.1rmlz0d.mongodb.net/')
}
module.exports=connectToDB

 

