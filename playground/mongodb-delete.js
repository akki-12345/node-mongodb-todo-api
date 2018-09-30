const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable to connect to mongodb server");
    }

    console.log("connected to mongodb server");
    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({name: 'koli'}).then((result) => {
    //     console.log(result);
    // });
    
    // db.collection('Todos').deleteOne({name: 'Aakash'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Todos').findOneAndDelete({name: 'Akki'}).then((result) => {
        console.log(result);
    });
});