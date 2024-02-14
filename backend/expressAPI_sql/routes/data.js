var express = require('express');
var router = express.Router();

const sql = require('../config/db')
const util = require('util')
const query = util.promisify(sql.query).bind(sql);

router.get("/",async function(req,res,next){
    try{
        let datas = await query(`SELECT * FROM data`)

        res.status(200).send({
            message:"success",
            result:datas
        })
    }catch(e){
        console.log(e)
        res.status(500).send({
            message:"fail",
            success:false
        })
    }
})

module.exports = router;