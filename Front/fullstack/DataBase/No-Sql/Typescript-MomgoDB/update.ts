// var {MongoClient}=require('mongodb');
// var mydbUrl="mongodb://127.0.0.1:27017"

// var client1=new MongoClient(mydbUrl)
// var db1="Practice"
// async function main(){
//    await client1.connect()
//    console.log("db connected")
//    let dbC=client1.db(db1)
//    let collection=dbC.collection('student')
//    let data=await collection.updateOne({name:'neel',hero:'sudeep'},{$set:{ name:'chapi',hero:'sudeeep'}})
// console.log(data)
// }
// main()