const express = require('express')
const router = express.Router()
const pool = require('../pool')
const {poolQuery} = require('../helpers')

router.get('/', (req, res) => {
  const {username, password} = req.query;
  console.log(username, password);
  res.send({success: true})
})

module.exports = router
