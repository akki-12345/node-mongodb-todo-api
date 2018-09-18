const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable to connect to mongodb server");
    }

    console.log("connected to mongodb server");
    const db = client.db('TodoApp');

    db.collection('Todos').find({age: 26}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });
});