let CustomerModel = require('../models/customer.models')
let express = require('express')
let router = express.Router()

http://localhost:3000/customer?email=rom@gmail.ry
router.get('/customer', (req, res) => {
    if (!req.query.email){
        return res.status(400).send('missing emails')
    }
    CustomerModel.findOne({
        email: req.query.email

})
.then(doc=>{
    res.json(doc)
})
.catch(err=>{
    res.status(500).json(err)
})
})


router.post('/customer',(req,res)=>{
// req.body

if(!req.body){
return res.status(400).send('Reqquest bosyis missing')
}

let model = new CustomerModel(req.body)
model.save()
.then(doc=>{
    if(!doc||doc.length===0) {
        return res.status(500).send(doc)
    }
    res.status(201).send(doc)
})
    .catch(err=>{
        res.status(500).json(err)
    })
})


router.put('/customer',(req,res)=>{
    if (!req.query.email) {
        return res.status(400).send('missing emails')
    }
    CustomerModel.findOneAndUpdate({
        email: req.query.email
    },req.body,{
        new: true
    })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
})
})

router.delete('/customer',(req,res)=>{
    if (!req.query.email) {
        return res.status(400).send('missing emails')
    }
    CustomerModel.findOneAndRemove({
        email: req.query.email
    })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports=router