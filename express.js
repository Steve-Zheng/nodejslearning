const express = require('express');
const post_router = require('./post_router');
const file_router = require('./file_router');
const app = express();

const db = require('./database');
const userModel = require('./userModel');

db.then(()=>{
    app.use(express.urlencoded({extended:true}));
    //app.use(express.static('static_files'));
    //TODO: Fix warnings
    app.use(file_router);
    app.use(post_router);
    app.use(express.static('static_files'));
    app.use((req,res)=>{
        res.status(404).sendFile(__dirname+'/static_files/404.html');
    })
}).catch((err)=>{
    console.log('DB connection failed.');
})
//TODO: Login refine
//TODO: Homepage
//TODO: Integrate with flutter_learning
app.listen(8080);