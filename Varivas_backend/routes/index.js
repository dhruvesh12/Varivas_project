var express = require('express');
var router = express.Router();
var movieDb = require('../model/movies')

/* GET home page. */
router.post('/postMovie', (req, res)=>{

  for(let i of req.body){
    i.genres = i.genres.toString()
  }
  
  movieDb.insertMany(req.body)
  
});


router.get('/getMovie',(req,res, next)=>{
 console.log("running")
  movieDb.find({}).then(function (result) {
    res.json({ Response: true, message: 'Data Found', details: result })
}).catch(next);

})

module.exports = router;
