import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from '../shared/admin-routing.module';

import { AdminComponent } from './components/admin.component';
import { AdminListComponent } from './shared/admin-list/admin-list.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { CampaignGoalRangesComponent } from './components/campaign-goal-ranges/campaign-goal-ranges.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { DonationNotificationsComponent } from './components/donation-notifications/donation-notifications.component';
import { FundraiserCategoriesComponent } from './components/fundraiser-categories/fundraiser-categories.component';
import { ThankYouMessagesComponent } from './components/thank-you-messages/thank-you-messages.component';
import { ContactRequestsComponent } from './components/contact-requests/contact-requests.component';
import { EmailOptInRequestsComponent } from './components/email-opt-in-requests/email-opt-in-requests.component';
import { AboutMissionItemsComponent } from './components/about-mission-items/about-mission-items.component';
import { AboutTeamItemsComponent } from './components/about-team-items/about-team-items.component';
import { CampaignCompletedItemsComponent } from './components/campaign-completed-items/campaign-completed-items.component';
import { DeductibilityStatusesComponent } from './components/deductibility-statuses/deductibility-statuses.component';
import { GameDevelopmentItemsComponent } from './components/game-development-items/game-development-items.component';
import { FaqItemsComponent } from './components/faq-items/faq-items.component';
import { FooterCopyItemsComponent } from './components/footer-copy-items/footer-copy-items.component';
import { FooterLeftCopyItemsComponent } from './components/footer-left-copy-items/footer-left-copy-items.component';
import { FundraiserStepTwoCopyItemsComponent } from './components/fundraiser-step-two-copy-items/fundraiser-step-two-copy-items.component';
import { HomepageLearnMoreItemsComponent } from './components/homepage-learn-more-items/homepage-learn-more-items.component';
import { HomepageMainSliderItemsComponent } from './components/homepage-main-slider-items/homepage-main-slider-items.component';
import { HowItWorksItemsComponent } from './components/how-it-works-items/how-it-works-items.component';
import { HowToSucceedItemsComponent } from './components/how-to-succeed-items/how-to-succeed-items.component';
import { NonProfitItemsComponent } from './components/non-profit-items/non-profit-items.component';
import { PricingItemsComponent } from './components/pricing-items/pricing-items.component';
import { PrivacyPolicyItemsComponent } from './components/privacy-policy-items/privacy-policy-items.component';
import { StartCampaignLearnMoreItemsComponent } from './components/start-campaign-learn-more-items/start-campaign-learn-more-items.component';
import { StartCampaignMainTextItemsComponent } from './components/start-campaign-main-text-items/start-campaign-main-text-items.component';
import { StartCampaignSmallTextItemsComponent } from './components/start-campaign-small-text-items/start-campaign-small-text-items.component';
import { TermsOfUseItemsComponent } from './components/terms-of-use-items/terms-of-use-items.component';
import { SentEmailComponent } from './components/sent-email/sent-email.component';
import { SitesComponent } from './components/sites/sites.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminListComponent,
    AccountDetailComponent,
    CampaignGoalRangesComponent,
    CampaignsComponent,
    DonationNotificationsComponent,
    FundraiserCategoriesComponent,
    ThankYouMessagesComponent,
    ContactRequestsComponent,
    EmailOptInRequestsComponent,
    AboutMissionItemsComponent,
    AboutTeamItemsComponent,
    CampaignCompletedItemsComponent,
    DeductibilityStatusesComponent,
    GameDevelopmentItemsComponent,
    FaqItemsComponent,
    FooterCopyItemsComponent,
    FooterLeftCopyItemsComponent,
    FundraiserStepTwoCopyItemsComponent,
    HomepageLearnMoreItemsComponent,
    HomepageMainSliderItemsComponent,
    HowItWorksItemsComponent,
    HowToSucceedItemsComponent,
    NonProfitItemsComponent,
    PricingItemsComponent,
    PrivacyPolicyItemsComponent,
    StartCampaignLearnMoreItemsComponent,
    StartCampaignMainTextItemsComponent,
    StartCampaignSmallTextItemsComponent,
    TermsOfUseItemsComponent,
    SentEmailComponent,
    SitesComponent
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
