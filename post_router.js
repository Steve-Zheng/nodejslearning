const {Router} = require('express');
const userModel = require('./userModel');

const router = new Router();

router.post('/register',async (req,res)=>{
    const {email,password,re_password} = req.body;
    console.log(password);
    console.log(re_password);
    const emailReg = /^[a-zA-Z0-9_]{2,16}@[a-zA-Z0-9]{2,16}\.com$/;
    if(!emailReg.test(email)){
        res.send('Invalid E-mail!');
        return;
    }
    else if(password !== re_password){
        res.send('Both passwords not identical!');
        return;
    }

    try{
        const emailDuplicateCheck = await userModel.findOne({email});
        if(emailDuplicateCheck){
            res.send('E-mail already registered!');
            return
        }
        else{
            await userModel.create({email,password});
            res.send('Registered successfully!');
        }
    }
    catch (err){
        res.send('Error occurred!');
    }
})

router.post('/login',async (req,res)=>{
    const {email,password} = req.body;
    const emailReg = /^[a-zA-Z0-9_]{2,16}@[a-zA-Z0-9]{2,16}\.com$/;
    if(!emailReg.test(email)){
        res.send('Invalid E-mail!');
        return;
    }

    try{
        const loginSuccessfully = await userModel.findOne({email,password});
        if(loginSuccessfully){
            res.send('Login successfully!');
        }
        else{
            res.send('Wrong email or password!');
        }
    }
    catch (err){
        res.send('Error occurred!');
    }
})

module.exports = router