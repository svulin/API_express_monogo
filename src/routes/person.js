let express = require ('express')
let router =express.Router()


//http://localhost:3000/person?name=Thomas&age=9
router.get('/person',(req,res)=>{
    if(req.query.name) {
        res.send(`You have requested a person ${req.query.name}`)
    }
    else {
    res.send('You have requested a person')
    }
})
//params property
//http://localhost:3000/person/john
router.get('/person/:name', (req, res) => {
    res.send(`You have requested a person
    ${req.params.name}`)
})

router.get('/error', (req,res)=>{
    throw new Error();
    
})


module.exports = router