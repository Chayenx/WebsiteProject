var express = require('express');
var router = express.Router();

const sql = require("../config/db")
const util = require('util')
const query = util.promisify(sql.query).bind(sql);

router.post("/",async function (req,res,next) {
  try {
    await pool.query(`INSERT INTO product_list (name, quantity, price)
    VALUES ('${req.body.name}','${req.body.quantity}','${req.body.price}')`)

    res.status(200).send({
      message:"success"
    })

  } catch(e) {
    console.log(e)
    res.status(500).send({
      message: "fail",
      success: false
    })
  }
})

router.get("/",async function (req,res,next) {
  try {
    let product_list = await pool.query(`SELECT * FROM product_list`)

    res.status(200).send({
      message:"success",
      result: product_list
    })

  } catch(e) {
    console.log(e)
    res.status(500).send({
      message: "fail",
      success: false
    })
  }
})

router.put("/",async function (req,res,next) {
  try {
    let body = req.body
    let queryString = `UPDATE product_list `
    if(Object.keys(body).length) {
      queryString += 'SET'
      let index = 0
      Object.keys(body).forEach( e => {
        if(index>0) {
          queryString += `,`
        }
        queryString += ` ${e}='${body[e]}'`
        index++
      })

      queryString += ` WHERE id=${req.query.id}`
    }
    
    await pool.query(queryString)

    res.status(200).send({
      message:"success",
      
    })

  } catch(e) {
    console.log(e)
    res.status(500).send({
      message: "fail",
      success: false
    })
  }
})

router.delete("/",async function (req,res,next) {
  try {
    await pool.query(`DELETE FROM product_list WHERE id=${req.query.id}`)

    res.status(200).send({
      message:"success"
    })

  } catch(e) {
    console.log(e)
    res.status(500).send({
      message: "fail",
      success: false
    })
  }
})

module.exports = router;