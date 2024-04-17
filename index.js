const express = require('express')
const app = express()
const path = require("path")

const ejs = require('ejs')


// set the view engine to ejs
app.set('view engine','ejs')

// set the view directory
app.set('views',path.join(__dirname,'views'))

// raute for rendering the index page
app.get('/', function (req, res) {
  res.render('index')
})
app.get('/remind', function (req, res) {
    res.render('remind')
  })

//   start the server

app.listen(3000, function(){
    console.log("server is running up 3000");
})