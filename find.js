var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();
(async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true, useUnifiedTopology:true });
        console.log('mongoose open for business');

        const StudentSchema = new mongoose.Schema({
            name: String,
            age : Number
        })
        const Student = mongoose.model('Student', StudentSchema)

        const result= await Student.find({name: "tayyab"});
        result.forEach((item)=>{
            console.log("tayayb" + item)
            console.log(`Name: ${item.name} , Age: ${item.age}`);
          })
        }
    catch(error){
        console.log(error)
    }  
})();