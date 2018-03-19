const passport = require('passport'); 
const LocalStrategy = require('passport-local').Strategy; 
const FacebookStrategy =require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const db = require('../models/index').sequelize; 
const User = db.import('../models/users');
const bcrypt = require('bcryptjs');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;

passport.use(new JWTStrategy(
    {jwtFromRequest: ExtractJwt.fromHeader('authorization'), secretOrKey: process.env.JWT_SECRET}, 
    (payload, done) => {
        User.findOne({where:{uid:payload.sub}}).then(
            (user) =>{
                done(null, user)
            }, 
            (error) => done(error)
        )
    }
))

passport.use(new LocalStrategy( 
    {usernameField: 'email'},
    (email, password, done) =>{        
        User.findOne({ where: {email: email} }).then(
            (user) => {
                if(!user) return done(null, false, { message: 'Incorrect email.' });

                if(!bcrypt.compareSync(password, user.password)) return done(null,  'Incorrect password' );

                return done(null, user);
            },
            (err) => done(err))
    })
);

// passport.use(new BearerStrategy(
//     function(token,done) {
//         User.findOne({token: token}, function (err,user){
//             if(err) {return done(err);}
//             if(!user) {return done(null,false);}
//             return done (null,user, {scope: 'all'});
//         });
//     }
// ));

//const FACEBOOK_APP_ID = '180896672633688';
//const FACEBOOK_APP_SECRET = '9eb68760579d7a63a194079c888bb995';

// passport.use(new FacebookStrategy({
//     clientId: FACEBOOK_APP_ID,
//     clientSecret: FACEBOO_APP_SECRET
//     callbackURL: "http://localHost:3000/auth/Facebook/callback"
// },
// function(accessToken,refreshToken,profile,cb ){
//     User.findOrCreate({facebookId:profile.id}, function (err,user){
//         return cb(err,user);
//     } );
// }
// ));
// passport.use(new TwitterStrategy({
//     customerKey: TWITTER_CONSUMER_KEY,
//     consumerSecret: TWITTER_CONSUMER_SECRET,
//     callbackURL:"HTTP://127.0.0.1:3000/auth/twitter/callback"
// },
// function(token,tokenSecret,profile,cb){
//     User.findOrCreate ({twitterId: profile.id}, function(err,user){
//         return cb(err,user);
//     });
// }));
// passport.use (new GoogleStrategy({
//     customerKey: TWITTER_CONSUMER_KEY,
//     consumerSecret: TWITTER_CONSUMER_SECRET,
//     callbackURL:"HTTP://127.0.0.1:3000/auth/google/callback"
// },
// function (token,tokenSecret,profile,done) {
//     User.findOrCreate ({googleId: profile.id}, function(err, user){
//         return done (err,user);
//     });
// }
// ));




module.exports = passport;