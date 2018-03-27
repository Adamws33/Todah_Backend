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
// const createToken = (userId) => {
//   const currentTime = new Date().getTime();
//   return jwt.encode({sub: userId , iat: currentTime}, "i_am_secret" || process.env.JWT_SECRET )
//   // process.env.JWTSECRET
// } 

router.post('/', requireSignin,  (req, res, next)=> {
  const userData = {
    firstname : req.user.firstname,
    lastname : req.user.lastname,
    email : req.user.email,
    uid: req.user.uid,
    token : createToken(req.user.uid)
}    
User.findOne({where:{email: req.body.email}}).then(
  function(user){
      //testing the information we are getting from our request and what we will compare it to for verification aws 03/10
      console.log("**************USER*************", user.dataValues)
      console.log("**************UID*************", user.dataValues.uid)
      console.log("**************rew.body.password*************", bcrypt.hashSync(req.body.password))
      console.log("**************user.dataValues.password*************", user.dataValues.password)
    if (user){
      bcrypt.compare(req.body.password , user.dataValues.password, function(err, matches){
        if(matches){
          // var token = createToken(req.body.uid);
            res.json({
              user:user,
              message: 'successfully authenticated',
              // session token not working ATM aws 03/10
              token: createToken(user.dataValues.uid),
              message: `Welcome ${user.dataValues.firstname}`
            });
          //   console.log("*************** token ************************", res.sessionToken)
         }else{
          res.status(500).send({error: 'failed to authenticate1'});
         }
      })
    }else{
      res.status(500).send({error: 'failed to authenticate2'});
    }
  },
  function(err){
    res.json(err);
  }
);
// res.json({message: "logged in successfully", user: userData})
})
// console.log("******TOKEN*********",userData.token)
// res.json({message: "logged in successfully", user: userData, token: userData.token})
// })

module.exports = router;