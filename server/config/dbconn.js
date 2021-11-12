const mongoose = require('mongoose');

const connectDB = async() =>{
   
    await mongoose.connect("mongodb+srv://admin:admin@cluster0.rm0fd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("mongoDB connected");
}

module.exports= connectDB