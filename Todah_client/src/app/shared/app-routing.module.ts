import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignModule } from '../campaign/campaign.module';

import { HomeComponent } from '../components/home/home.component';
import { HowItWorksComponent } from '../components/how-it-works/how-it-works.component';
import { HowToSucceedComponent } from '../components/how-to-succeed/how-to-succeed.component';
import { FaqComponent } from '../components/faq/faq.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { PricingComponent } from '../components/pricing/pricing.component';
import { ProfileComponent } from '../campaign/profile/profile.component';
import { FindCampaignComponent } from '../campaign/findCampaign/find-campaign/find-campaign.component';
import { FindCampaignSnapshotComponent } from '../campaign/findCampaign/find-campaign-snapshot/find-campaign-snapshot.component';
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


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'howItWorks', component: HowItWorksComponent },
  { path: 'howToSucceed', component: HowToSucceedComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'pricing', component: PricingComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}