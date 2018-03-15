import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CampaignService } from '../../../campaign.service';


@Component({
  selector: 'app-start-campaign-form1',
  templateUrl: './start-campaign-form1.component.html',
  styleUrls: ['./start-campaign-form1.component.css']
})
export class StartCampaignForm1Component implements OnInit {
  campaignForm: FormGroup;
  campaignImageFile: File = null;
  defaultDropdownDirection = 'select';
  @ViewChild('MainImage') User_Image;



  constructor(private campaignService: CampaignService, private form: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.campaignForm = this.form.group({
      // 'campaignData': new FormGroup({
        // 'project_img_thumb_url': new FormControl(null),
        // 'creator_id': new FormControl(null),
        // 'organization_name': new FormControl(null, Validators.required),
        // 'organization_ein': new FormControl (null),
        // 'campaignTitle': new FormControl(null, Validators.required),
        // 'chapterName': new FormControl(null),
        // 'staffName': new FormControl(null),

        // 'campaignCreatorRole': new FormControl(null, Validators.required),
        // 'campaignCategory': new FormControl(null, Validators.required),
        // 'campaignTeaser': new FormControl(null, Validators.required),
        // 'campaignLongDesc': new FormControl(null, Validators.required),
        // 'orgWebsite': new FormControl(null),

        // 'facebook': new FormControl(null),
        // 'twitter': new FormControl(null),
        // 'instagram': new FormControl(null),
        // 'youtube': new FormControl(null),
        "project_image_thumb_url": new FormControl(null),
        "creator_id": new FormControl(2),
        "organization_name": new FormControl("Personal"),
        "organization_ein": new FormControl("a rose by any other name smells as sweet"),
        "project_title": new FormControl("This is a campaign to raise money to kiick off Adams flower shop.  To bring color and sweet smells to every house"),
        "project_purpose": new FormControl("www.google.com"),
        "project_website": new FormControl(null),
        "project_image": new FormControl(null),
        "finished_step_one": new FormControl(true),
        "slider_inputs": new FormControl("twitter.com"),
        "slider_ranges": new FormControl("insta.com"),
        "goal_currency": new FormControl("youtube.com"),
        "goal": new FormControl(50000),
        "finished_step_two": new FormControl(false),
        "end_date": new FormControl("05/30/2018"),
        "is_published": new FormControl(false),
        "funder_count": new FormControl(1),
        "funded_amount_currency": new FormControl("A Flower in every vase"),
        "funded_amount": new FormControl(1500.25),
        "project_video": new FormControl("a rose by any other name smells as sweet"),
        "project_short_description": new FormControl("This is a campaign to raise money to kiick off Adams flower shop.  To bring color and sweet smells to every house"),
        "project_category_id": new FormControl(1),
        "is_approved": new FormControl(false),
        "initial_funds_currency": new FormControl("USD"),
        "initial_funds": new FormControl(1500.25),
        "organization_chapter_name": new FormControl("twitter.com"),
        "organization_staff_name": new FormControl("insta.com"),
        "external_payment_portal": new FormControl("youtube.com"),
        "is_personal_cause": new FormControl(false),
        "project_beneficiary": new FormControl("Hello World"),
        "campaign_slug":new FormControl("05/30/2018"),
        "never_event": new FormControl(false),
        "project_role": new FormControl(null),
        "facebook_url": new FormControl("facebook.com"),
        "instagram_url": new FormControl("twitter.com"),
        "twitter_url": new FormControl("insta.com"),
        "youtube_url": new FormControl("youtube.com"),
        "allow_cash_donations": new FormControl(false),
        "published_email_sent": new FormControl(true),
        "client_is_paying_platform_fees": new FormControl(true)
      })
    // })
  }

  onSubmit() {
    // console.log(this.campaignForm);
    this.campaignService.storeCampaign(this.campaignForm.value)
      .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
      );
  }

  

}
