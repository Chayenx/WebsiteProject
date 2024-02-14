var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')


router.get('/', function(req, res, next) {
  
  console.log(req.query)

  res.send("method get user");
  
  res.status(200).json({
    message: "success",
    result: "My Cat",
    no: 1,
    isHuman: false
  })
});

router.post('/', function(req, res, next) {

});

router.put('/:id/:cat', function(req, res, next) {
  console.log(req.params.id)
  res.send('Update Group Success');
});

router.delete('/', function(req, res, next) {
  res.send('Delete Group Success');
});

router.post('/create_user', async function(req, res, next) {
  try {
    let resBody = {
      username: req.body.username,
      password_hash: await bcrypt.hash(req.body.password, 10),
      valid: false
    }

    resBody.valid = await bcrypt.compare(req.body.confirm_password, resBody.password_hash)
    res.status(200).send(resBody)
  } catch(e) {
    console.log(e)
    res.status(500).send({
      message: "fail"
    })
  }
});


module.exports = router;
