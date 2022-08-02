const express = require('express')
const adminRouter = express.Router()

adminRouter.post('/', (req, res) => {
  res.send(req.body)
});

module.exports = adminRouter