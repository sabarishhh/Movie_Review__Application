const { response } = require('express')
const express = require ('express')
const router = express.Router()
const signupTemplateCopy= require('../models/signupmodels')



router.post('/Signup',(request,response)=>{


    const signedUpUser = new signupTemplateCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })
    signedUpUser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
})
router.post('/login',(request,response) =>{

    const {email,password}=request.body
    signupTemplateCopy.findOne({ email: email},(err,user) =>{
        if(user){
            if(password === user.password){
                response.send({message:"login successfull",user:user})
            }else{
                response.send({message:"password didnt match"})
            }
        }else{
            response.send({message:"usernot registered"})
        }
    })
})

module.exports = router
