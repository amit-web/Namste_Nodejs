const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb+srv://amitmehtawebdev:In9qHm4hCdbnJbI1@namstenode.psmgj.mongodb.net/";

// Create a new MongoClient instance
const client = new MongoClient(url);

// Database Name
const dbName = 'HelloWorld';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  // the following code examples can be pasted here...
//   const findResult = await collection.find({}).toArray();
//   console.log('Found documents =>', findResult);

  const data = {
    firstname:"priya",
    lastname: 'singh',
    city: 'Hyderabad',
    phoneno: '345677890'
  }

  const insertResult = await collection.insertOne(data);
  console.log('Inserted documents =>', insertResult);
//   const insertResult = await collection.insertMany([data]);
//   console.log('Inserted documents =>', insertResult);

//   const countResult  = await collection.countDocuments({});
//   console.log("count of the document",countResult)

// const findResult = await collection.find({firstname:"sunny"}).toArray();

// console.log(findResult)
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

