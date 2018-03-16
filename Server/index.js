require('dotenv').config();
const express = require('express');
const app = express();
// change this to https soon.
const http = require('http').Server(app);
const cors = require('cors');
const bodyParser = require('body-parser');
require('./models/index')
const router = require('./router');

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/api/users/Token', require('./controllers/tokencontroller'));
app.use('/api/users', require('./controllers/userscontroller'));
app.use('/api/campaigns', require('./controllers/campaigncontroller'));
app.use('/api/test', function(req,res){
    res.send("Hello World")
  })
// endpoints 
router(app);

http.listen(process.env.PORT, function(){
    console.log(`listening on port ${process.env.PORT}`)
})