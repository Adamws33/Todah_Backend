const router = require('express').Router();
const db = require('../models/index');
const Logs = db.sequelize.import('../models/logs');
var express = require ('express'),
expressLogging = require ('express-logging'),
logger =require ('logops');
var app = express();

var logger= require('express-logger');

server.use(logger({path: "../index"}));
 
app.listen(3000);




// const follow = require('text-file-follower');
// const follower = follow('TeamAwesome.txt');

// follower.on('line', function(filename,line){
//     console.log ('Got a new line from' +filename+': '+line);
// });
// follower.close();
// router.post('/', function(req, res) {
// 	console.log(req.body)
// 	var logid = req.logs.id;
// 	var info = req.body.logs.logs;
	
  



 
module.exports = router;