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
        age: Number,
        course: {type: mongoose.Schema.Types.ObjectId, ref: 'Course'}
      });
      const courseSchema = new mongoose.Schema({
        courseName: String,
        noOfTopics: Number
      });

      //Creating a model
      const Student = mongoose.model('Student', studentSchema);
      const Course = mongoose.model('Course', courseSchema);
      
      // This find will return student object will only id of course, if we want to 
      // load related documents then we need to call populate
      //const student = await Student.find({_id: "5f8087bcc936e131c8173ef3" });
      const student = await Student.find({_id: "5f8087bcc936e131c8173ef3" }).populate("course");

    //   const studentResult = await Student.updateOne({_id: "5f808dbb8488ea5750273753"}, 
    //   {
    //     $push: {
    //       courses: [course1SaveResult,course2SaveResult]
    //     }
    //   })

      console.log("Result: ",student);
    }
    catch(error) {
      console.log(error);
    }
})();