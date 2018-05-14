const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApi',(err,client)=>{
    if(err)
    {
      return console.log("Unable to connect");
    }
    console.log("Connected to database server");
     const db=client.db('TodoApp');
     db.collection('Users').find({name:'Divy'}).toArray().then((docs)=>
    {
      console.log(docs);
    },(error)=>{
      console.log(error);
        });
      });