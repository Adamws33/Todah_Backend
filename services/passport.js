const passport = require('passport'); 
const LocalStrategy = require('passport-local').Strategy; 
const FacebookStrategy =require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const BearerStrategy = require('passport-bearer').Strategy;
const db = require('../models/index').sequelize; 
const User = db.import('../models/users');
const bcrypt = require('bcryptjs');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
const JWTStrategy = require('passport-jwt').Strategy;
      ExtractJwt=require('passport-jwt').ExactJwt;


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
passport.use(new JWTStrategy(opts,function(jwt_payload,done){
    User.findOne({id: jwt_playload.sub}, function(err,user){
        if(err){
            return done(err,false);
        }
        if (user){
            return done(null,user);
        } else{
            return done(null, false);
        }

    });
}));

passport.use(new BearerStrategy(
    function(token,done) {
        User.findOne({token: token}, function (err,user){
            if(err) {return done(err);}
            if(!user) {return done(null,false);}
            return done (null,user, {scope: 'all'});
        });
    }
));
passport.use(new FacebookStrategy({
    clientId: FACEBOOK_APP_ID,
    clientSecret:Facebook_APP_SECRET,
    callbackURL: "http://localHost:300/auth/Facebook/callback"
},
function(accessToken,refreshToken,profile,cb ){
    User.findOrCreate({facebookId:profile.id}, function (err,user){
        return cb(err,user);
    } );
}
));
passport.use(new TwitterStrategy({
    customerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL:"HTTP://127.0.0.1:3000/auth/twitter/callback"
},
function(token,tokenSecret,profile,cb){
    User.findOrCreate ({twitterId: profile.id}, function(err,user){
        return cb(err,user);
    });
}));
passport.use (new GoogleStrategy({
    customerKey: GOOGLE_CONSUMER_KEY,
    consumerSecret: GOOGLE_CONSUMER_SECRET,
    callbackURL:"HTTP://127.0.0.1:3000/auth/google/callback"
},
function (token,tokenSecret,profile,done) {
    User.findOrCreate ({googleId: profile.id}, function(err, user){
        return done (err,user);
    });
}
));




module.exports = passport;