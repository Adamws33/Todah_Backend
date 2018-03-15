import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from '../campaign/profile/profile.component';
import { FindCampaignSnapshotComponent } from '../campaign/findCampaign/find-campaign-snapshot/find-campaign-snapshot.component';
import { FindCampaignComponent } from '../campaign/findCampaign/find-campaign/find-campaign.component';
import { FindCampaignCategoryComponent } from '../campaign/findCampaign/find-campaign-category/find-campaign-category.component';
import { GivingCampaignPageComponent } from '../campaign/giving/giving-campaign-page/giving-campaign-page.component';
import { GivingEnvelopeWallComponent } from '../campaign/giving/giving-envelope-wall/giving-envelope-wall.component';
import { GivingDonateComponent } from '../campaign/giving/giving-donate/giving-donate.component';
import { CancelPaymentComponent } from '../campaign/giving/cancel-payment/cancel-payment.component';
import { StartCampaignComponent } from '../campaign/startCampaign/start-campaign/start-campaign.component';
import { StartCampaignSuccessComponent } from '../campaign/startCampaign/shared/start-campaign-success/start-campaign-success.component';
import { StartCampaignForm1Component } from '../campaign/startCampaign/shared/start-campaign-form1/start-campaign-form1.component';
import { StartCampaignForm2Component } from '../campaign/startCampaign/shared/start-campaign-form2/start-campaign-form2.component';
import { StartCampaignConfirmComponent } from '../campaign/startCampaign/shared/start-campaign-confirm/start-campaign-confirm.component';
import { DeleteCampaignComponent } from '../campaign/delete-campaign/delete-campaign.component';



const campaignRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },


  { path: 'snapshot', component: FindCampaignSnapshotComponent },
  { path: 'findCampaign', component: FindCampaignComponent },
  { path: 'browseCategory', component: FindCampaignCategoryComponent },

  { path: 'campaignPage', component: GivingCampaignPageComponent },
  { path: 'envelopeWall', component: GivingEnvelopeWallComponent },
  { path: 'donate', component: GivingDonateComponent },
  { path: 'cancelPayment', component: CancelPaymentComponent },

  { path: 'startCampaign', component: StartCampaignComponent },
  { path: 'startCampaign-success', component: StartCampaignSuccessComponent },
  { path: 'startCampaign-form1', component: StartCampaignForm1Component },
  { path: 'startCampaign-form2', component: StartCampaignForm2Component },
  { path: 'startCampaign-confirmation', component: StartCampaignConfirmComponent },

  { path: 'deleteCampaign', component: DeleteCampaignComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(campaignRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CampaignRoutingModule { }