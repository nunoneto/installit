var express = require('express');
var app = express();

app.set('views','./public/views');
app.set('view engine','ejs');

app.use('/resources/libs',express.static('bower_components'));
app.use('/resources',express.static('public/resources'));
app.use('/views',express.static('public/html'));


app.get('/',function(request, response){
  response.render('index');
});

var server = app.listen(80,function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("installIT started, listening on port "+port);
});
