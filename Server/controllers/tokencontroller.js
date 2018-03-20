const router = require('express').Router();
const db = require('../models/index');
const User = db.sequelize.import('../models/users');
const bcrypt = require('bcryptjs');
const passport = require('passport');
require('../services/passport');
const requireSignin = passport.authenticate('local', {session: false});
const jwt = require('jwt-simple');

const createToken = (userId) => {
  const currentTime = new Date().getTime();
  // return "hello callo,", userId
  console.log("***************** USERID******",userId)
  return jwt.encode({sub: userId , iat: currentTime}, "i_am_secret" || process.env.JWT_SECRET )
  // process.env.JWTSECRET
} 

router.post('/', requireSignin ,  (req, res, next)=> {
  const userData = {
    firstname : req.user.firstname,
    lastname : req.user.lastname,
    email : req.user.email,
    uid: req.user.uid,
    token : createToken(req.user.uid)
}
console.log("******TOKEN*********",userData.token)
res.json({message: "logged in successfully", user: userData})
})

module.exports = router;