const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApi',(err,client)=>{
    if(err)
    {
      return console.log("Unable to connect");
    }
    console.log("Connected to database server");
     const db=client.db('TodoApp');
   
    db.collection('Users').findOneAndUpdate({name:'Divy'},{
        $set:{
            "name":"Delphi"
        },
        $inc:{age:-1}
    },{
        returnOriginal:false
    }).then((res)=>{
        console.log(res);
    }),(err)=>
    {
        console.log(err);
    }
      });