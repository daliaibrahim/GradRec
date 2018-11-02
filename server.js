var express = require('express')
var app = express()
var port=3333
var path=require('path');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {

   res.sendFile(path.join(__dirname+'/create-project.html'));
})

app.listen(port,()=>console.log('GradRec is listening on port ${port}!'))