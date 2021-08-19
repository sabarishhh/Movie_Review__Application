const { response } = require('express')
const express = require ('express')
const router = express.Router()
const dataTemplateCopy= require('../models/datamodels')



router.post('/Insert',(request,response)=>{


    const movieData = new dataTemplateCopy({
        title:request.body.title,
        description:request.body.description,
        genre:request.body.genre,
        rating:request.body.rating
       
    })
    movieData.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
})


module.exports = router
