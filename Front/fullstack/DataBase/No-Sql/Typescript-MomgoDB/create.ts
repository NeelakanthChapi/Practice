import {MongoClient} from 'mongodb'
// let {MongoClient}=require('mongodb')
let myaddress="mongodb://127.0.0.1:27017"

let client=new MongoClient(myaddress)
let dbName="Practice"

async function dbLink(){
  await  client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('student');
 await collection.insertOne({name:'neel',hero:'sudeep'})
 console.log("inserted")
}
dbLink()