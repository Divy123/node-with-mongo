const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApi',(err,client)=>{
    if(err)
    {
      return console.log("Unable to connect");
    }
    console.log("Connected to database server");
     const db=client.db('TodoApp');
    //  db.collection('Users').deleteMany({name:'Divy'}).then((res)=>
    // {
    //   console.log(res);
    // },(error)=>{
    //   console.log(error);
    //     });
    db.collection('Users').findOneAndDelete({name:'Delhi'}).then((res)=>{
        console.log(res);
    })
      });