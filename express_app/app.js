const express = require('express')
const request = require('request')
const app = express()
const port = 3001
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
    request('https://api.shortboxed.com/comics/v1/new', function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred and handle it
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          res.setHeader('Content-Type', 'application/json');
          res.send(body)
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))