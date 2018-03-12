const router = require('express').Router();
const db = require('../models/index');
const User = db.sequelize.import('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');

router.post('/campaign',(req,res) => {
    console.log(req.body)
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
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
})

router.delete('/campaign',function(req,res) {
    var data = req.body.campaign;
    Campaign.destroy({
        where: { campaign: data }
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