var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();

(async ()=>{
    try {
      await mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true, useUnifiedTopology:true });
      console.log('mongoose open for business');

      //Define a schema
      const studentSchema = new mongoose.Schema({
        name: String,
        age: Number
      });

      //Creating a model
      const Student = mongoose.model('Student', studentSchema);
    //   for delete many
      const result = await Student.deleteMany({name: "Daniyal"});

    // find and deleteOne
    // const result = await Student.findByIdAndDelete("5f807aa5e8ab3a5390968568");
    //   const result = await Student.deleteOne({name: "tayyab"});

      console.log("Result: ",result);
    }
    catch(error) {
      console.log(error);
    }
})();