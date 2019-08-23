var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
 
app.get('/', function (req, res, next) {
  console.log(req.query.c);
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(9999, function () {
  console.log('CORS-enabled web server listening on port 9999')
})