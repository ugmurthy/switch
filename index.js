
var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

var bodyParser = require("body-parser")
var swStatus = 0;


app.set('port',(process.env.PORT) || 5000);

/// check out:  https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies


router.get("/",function(req,res){
  console.log("---getting switch.html");	
  res.sendFile(path + "switch.html");
});

router.get("/switch",function(req,res){
  console.log("---getting switch.html");	
  res.sendFile(path + "switch.html");
});


//router.post("/switch:status", function(req,res){
//	swStatus=req.body.status;
//	console.log("===POST switch flipped---",swStatus);
//	res.end();
//});
//

router.get("/swStatus",function(req,res) {
	res.json({"Switch":swStatus})
});

router.post("/switch",function(req,res){
	 var tmpsw = req.body.swval
	 swStatus = tmpsw;
	 var tmptxt = "";
	 
	 if (tmpsw == 0) 
	 	tmptxt = "OFF"; 
	 else 
	 	tmptxt = "ON";
	 console.log("Switch is ",tmptxt);
	 res.end();
});
app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(app.get('port'),function(){
  console.log("Live at Port ",app.get('port'));
});

