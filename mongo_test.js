const mongoose = require('mongoose');
const url         = 'mongodb://localhost:27017/myproject';

mongoose.connect(url);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
  const collection = connection.collection('users');
  async function getAllDocuments(){
    const documents = await collection.find({}).toArray();
    console.log(documents);
    }
    getAllDocuments();
});

