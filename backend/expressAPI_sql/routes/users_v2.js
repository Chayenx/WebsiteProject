var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  
  console.log(req.query)
  
  res.status(200).json({
    message: "success",
    result: "My Cat",
    no: 1,
    isHuman: false
  })
});

router.post('/', function(req, res, next) {
  console.log(req.headers)
  console.log(req.body)
  console.log(typeof req.body.isUser)
  res.send('Create Group Success');
});

router.put('/:id/:cat', function(req, res, next) {
  console.log(req.params.id)
  res.send('Update Group Success');
});

router.delete('/', function(req, res, next) {
  res.send('Delete Group Success');
});


module.exports = router;
