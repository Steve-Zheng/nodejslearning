const mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);

const connectionString = 'mongodb://localhost:27017/test_database';
const options = {useNewUrlParser: true, useUnifiedTopology: true};
module.exports = new Promise((resolve,reject)=>{
    mongoose.connect(connectionString,options);
    mongoose.connection.on('open',(err)=>{
        if(err){
            reject(err);
        }
        else{
            console.log('Connection established.');
            resolve();
        }
    })
})
