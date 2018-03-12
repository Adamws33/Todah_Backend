const router = require('express').Router();
const db = require('../models/index');
const Campaign = db.sequelize.import('../models/campaign');
const jwt = require('jwt-simple');
const passport = require('passport');
const requireJWT = passport.authenticate('jwt', {session: false});

router.post('/',requireJWT,(req,res) => {
    console.log("*************req.body*******************", req.body)
    Campaign.create({
       orgname: req.body.orgname,
       chapname: req.body.chapname,
       staffname: req.body.staffname,
       camptitle: req.body.camptitle,
       campcreatorrole: req.body.campcreatorrole,
       campcat: req.body.campcat,
       camptease: req.body.camptease,
       camplongdesc: req.body.camplongdesc,
       origwebsite: req.body.origwebsite,
       campimg: req.body.campimg,
       addimg: req.body.addimg,
       facebook: req.body.facebook,
       twitter: req.body.twitter,
       instagram: req.body.instagram,
       youtube: req.body.youtube,
       campGoal: req.body.campGoal,
       precampfunds: req.body.precampfunds,
       enddate: req.body.enddate,
       contributors: req.body.contributors,
       total: req.body.total
    }).then(
        function createSuccess(campaign){
            res.json(campaign)
            console.log("*********CAMPAIGN AFTER POST *********************", campaign)
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
})

router.delete('/:id',function(req,res) {
    var data = req.params.id;
    Campaign.destroy({
        where: { id: data }
    }).then(
        function deleteCampaignSuccess(data){
            res.send("You have successfully deleted your campaign.");
        },
        function deleteCampaignError(err){
            res.send(500, err.message);
        }
    );
});

module.exports = router;