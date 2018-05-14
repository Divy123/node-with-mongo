const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApi',(err,client)=>{
    if(err)
    {
      return console.log("Unable to connect");
    }
    console.log("Connected to database server");
     const db=client.db('TodoApp');
    // db.collection('Todo').insertOne({
    //     text:'First to do',
    //     completed:false
    // },(err,result)=>{
    //     if(err)
    //     {
    //       return console.log("Unable to insert the Todo"+err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
     db.collection('Users').insertOne({
         name:'Divy',
         age:19,
         location:'Allahabad'
     },(err,result)=>
    {
     if(err)
     {
        return console.log("Unable to insert the Todo"+err);
     }
     console.log(JSON.stringify(result.ops,undefined,2));
    }
    )

    client.close();
});
