const express = require('express')
const router = express.Router()
const Sid = require('../models/sid')
console.log('running sidjs')

router.get('/sid', async(req, res)=>{
    try{
        const siddharth = await Sid.find()
        res.json(siddharth)
    }
    catch(err){
        res.send('Error ' + err)
    }
})

router.get('/getById/:id', async(req, res)=>{
    try{
        const siddharth = await Sid.findById(req.params.id)
        res.json(siddharth)
    }
    catch(err){
        res.send('Error ' + err)
    }
})

router.get('/getByName/:name', async(req, res)=>{
    try{
        const siddharth = await Sid.findOne({name: req.params.name})
        res.json(siddharth)
    }
    catch(err){
        res.send('Error ' + err)
    }
})


router.post('/upload', async(req, res)=>{
    const sid = new Sid({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 = await sid.save()
        console.log(a1);
        res.json(a1)
    }
    catch(err){
        res.send('Error Caught ' +err)
    }
})

router.patch('/:id', async(req, res)=>{
    try{
        const sid = await Sid.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        sid.sub = req.body.sub
        const a1 = await sid.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error')
    }
})

router.delete('/:id', async(req, res)=>{
    try{
        const sid = await Sid.findById(req.params.id)
        sid.sub = req.body.sub
        const a1 = await sid.remove()
        res.json(a1)
    }
    catch(err){
        res.send('Error')
    }
})

module.exports = router