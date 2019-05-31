//basic required imports for NodeJS
var express = require ('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var useragent =require('express-useragent');
// Create an instance of express for our app and instantiate BodyParser and cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

//Api url
var api ='/api/whoami';

app.get(api,function(req, res, next){
var ipaddress=req.ip;
var language= req.acceptsLanguages();
var software= "OS: "+req.useragent.os +", Browser: "+ req.useragent.browser;

res.json({'ipaddress': ipaddress,'language': language,'software': software});
});



app.listen(3000,function(){
console.log("Working");
});