const router = require('express').Router();
const db = require('../models/index');
const Logs = db.sequelize.import('../models/logs');
const follow = require('text-file-follower');
const follower = follow('TeamAwesome.txt');

follower.on('line', function(filename,line){
    console.log ('Got a new line from' +filename+': '+line);
});
follower.close();





module.exports = router;