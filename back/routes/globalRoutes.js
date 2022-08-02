const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  res.send(req.body)
});

router.get('/', (req, res)=> {
    res.status(200).send('req sending working!');
})

module.exports = router