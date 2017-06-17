const express = require('express')
const router = express.Router()
const pool = require('../pool')
const {poolQuery} = require('../helpers')

router.get('/', (req, res) => {
  console.log('here')
  res.send({success: true})
})

module.exports = router
