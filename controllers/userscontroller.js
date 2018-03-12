const router = require('express').Router();
const db = require('../models/index');
const User = db.sequelize.import('../models/users');
const bcrypt = require('bcryptjs');
const passport = require('passport');
require('../services/passport');
const requireSignin = passport.authenticate('local', {session: false});
const jwt = require('jwt-simple');
// const requireJWT = passport.authenticate('jwt', {session: false});


const createToken = (userId) => {
    const currentTime = new Date().getTime();
    return jwt.encode({sub: userId , iat: currentTime}, "i_am_secret" || process.env.JWT_SECRET, {expiresIn: 60*60*24} )
    // process.env.JWTSECRET
} 

router.post('/signup', (req, res)  => {
    console.log("*************** signup req.body ************************", req.body)
    User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        // img: req.body.img, 
        password: bcrypt.hashSync(req.body.password) 
    }).then(
        (successData) => {
            const userData = {
                firstName : successData.firstname,
                lastName : successData.lastname,
                email : successData.email,
                // token : createToken(successData.uid),
                //per inconsistency with API requeest and model removed img key
                // img: successData.img
            }
            res.json({message: `Welcome ${userData.firstName}`, data: userData})
        },
        (err) => {
            res.send({error: err})
        }
    )    
}) 

router.post('/login', requireSignin ,  (req, res, next) => {
    console.log("**************rew*************", req.body)
    // const userData = {
    //         // firstName : req.body.firstname,
    //         // lastName : req.body.lastname,
    //     // email : ,
    //     // token : createToken(req.body.uid),
    //     // password: bcrypt.hashSync(req.body.password) 
     //per inconsistency with API requeest and model removed img key
    //     // img: req.user.img
    // }
    
    User.findOne({where:{email: req.body.email}}).then(

        function(user){
            //testing the information we are getting from our request and what we will compare it to for verification aws 03/10
            console.log("**************USER*************", user.dataValues)
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
                    // sessionToken: createToken(req.body.uid)
                    message: `Welcome ${user.dataValues.firstname}`
                  });
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

router.get('/:email', function(req, res) {

    console.log("******************",req)
    var user = req.params.email;
      User.findAll({
          where: { email: user }
      })
      .then(
          function findAllSuccess(data) {
              // console.log(data);
              res.json(data);
          },
          function findAllError(err) {
              res.send(500, err.message);
          }
      );
  });

module.exports = router;