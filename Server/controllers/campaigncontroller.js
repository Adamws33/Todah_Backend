const router = require('express').Router();
const db = require('../models/index');
const Campaign = db.sequelize.import('../models/campaign');
const jwt = require('jwt-simple');
const passport = require('passport');
const requireJWT = passport.authenticate('jwt', {session: false});

router.post('/',requireJWT,(req,res) => {
    console.log("*************req.body*******************", req)
    Campaign.create({
        id: req.body.id,
        modified_date: req.body.modified_date,
        create_date: req.body.create_date,
        project_image_thumb_url: req.body.project_image_thumb_url,
        creator_id: req.body.creator_id,
        organization_name: req.body.organization_name,
        organization_ein: req.body.organization_ein,
        project_title: req.body.project_title,
        project_purpose: req.body.project_purpose,
        project_website: req.body.project_website,
        project_image: req.body.project_image,
        finished_step_one: req.body.finished_step_one,
        slider_inputs: req.body.slider_inputs,
        slider_ranges: req.body.slider_ranges,
        goal_currency: req.body.goal_currency,
        goal: req.body.goal,
        finished_step_two: req.body.finished_step_two,
        end_date: req.body.end_date,
        is_published: req.body.is_published,
        funder_count: req.body. funder_count,
        funded_amount_currency: req.body.funded_amount_currency,
        funded_amount: req.body.funded_amount,
        project_video: req.body.project_video,
        project_short_description: req.body.project_short_description,
        project_category_id: req.body.project_category_id,
        is_approved: req.body.is_approved,
        initial_funds_currency: req.body.initial_funds_currency,
        initial_funds: req.body.initial_funds,
        organization_chapter_name: req.body.organization_chapter_name,
        organization_staff_name: req.body.organization_staff_name,
        external_payment_portal: req.body.external_payment_portal,
        is_personal_cause: req.body.is_personal_cause,
        project_beneficiary: req.body.project_beneficiary,
        campaign_slug: req.body.campaign_slug,
        never_event: req.body.never_event,
        project_role: req.body.project_role,
        facebook_url: req.body.facebook_url,
        instagram_url: req.body.instagram_url,
        twitter_url: req.body.twitter_url,
        youtube_url: req.body.youtube_url,
        allow_cash_donations: req.body.allow_cash_donations,
        published_email_sent: req.body.published_email_sent,
        client_is_paying_platform_fees: req.body.client_is_paying_platform_fees,
        launch_date: req.body.launch_date,
        
            

       

    }).then(
        function createSuccess(campaign){
            res.json({
                campId:campaign.dataValues.id,
              });

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