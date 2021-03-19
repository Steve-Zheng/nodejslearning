const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    enabled:{
        type:Boolean,
        default:true
    }
})

module.exports = mongoose.model('login_credentials',userSchema);