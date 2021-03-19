const {Router} = require('express');
const userModel = require('./userModel');
const url = require('url');
const router = new Router();

router.get('/register',(req,res)=>{
    const fileName = '/static_files/register.html';
    res.sendFile(__dirname+fileName);
})
router.get('/',(req,res)=>{
    const fileName = '/static_files/index.html';
    res.sendFile(__dirname+fileName);
})
router.get('/login',(req,res)=>{
    const fileName = '/static_files/login.html';
    res.sendFile(__dirname+fileName);
})

module.exports = router