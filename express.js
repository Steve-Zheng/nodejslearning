const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const connectionString = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(client=>{
        console.log('Connected to database.');
        const db = client.db('test_database');
        const loginCredentials = db.collection('login_credentials');

        app.listen(8080,function(){
            console.log('Listening on 8080.');
        })

        app.use(express.static('html_files'));
        app.use(bodyParser.urlencoded({extended: true}));

        app.get('/',(req,res)=>{
            res.sendFile(__dirname+'/html_files/index.html');
        })

        app.post('/register',(req,res)=>{
            loginCredentials.insertOne(req.body)
                .then(result => {
                    console.log(result);
                })
                .catch(error => console.error(error));
        })

    })
    .catch(error=> console.error(error));
