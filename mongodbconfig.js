const mongoose = require('mongoose');
function connectToDatabase() {
  mongoose.connect('mongodb+srv://arjun-sanjay:1YmZ2Cs1Y2EYx6ku@cluster0.xxipblf.mongodb.net/form')
    .then(() => {
      console.log('Connected to MongoDB'); 
    })
}
module.exports = connectToDatabase;
