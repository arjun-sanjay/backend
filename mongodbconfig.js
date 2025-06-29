const mongoose = require('mongoose');
function connectToDatabase() {
  mongoose.connect('mongodb+srv://arjun-sanjay:@cluster0.xxipblf.mongodb.net/form')
    .then(() => {
      console.log('Connected to MongoDB'); 
    })
}
module.exports = connectToDatabase;
