import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from '../admin/components/admin.component';
import { AdminListComponent } from '../admin/shared/admin-list/admin-list.component';
import { AboutMissionItemsComponent } from '../admin/components/about-mission-items/about-mission-items.component';
import { AboutTeamItemsComponent } from '../admin/components/about-team-items/about-team-items.component';
import { AccountDetailComponent } from '../admin/components/account-detail/account-detail.component';
import { CampaignCompletedItemsComponent } from '../admin/components/campaign-completed-items/campaign-completed-items.component';
import { CampaignGoalRangesComponent } from '../admin/components/campaign-goal-ranges/campaign-goal-ranges.component';
import { CampaignsComponent } from '../admin/components/campaigns/campaigns.component';
import { ContactRequestsComponent } from '../admin/components/contact-requests/contact-requests.component';
import { DeductibilityStatusesComponent } from '../admin/components/deductibility-statuses/deductibility-statuses.component';
import { DonationNotificationsComponent } from '../admin/components/donation-notifications/donation-notifications.component';
import { EmailOptInRequestsComponent } from '../admin/components/email-opt-in-requests/email-opt-in-requests.component';
import { FaqItemsComponent } from '../admin/components/faq-items/faq-items.component';
import { FooterCopyItemsComponent } from '../admin/components/footer-copy-items/footer-copy-items.component';
import { FooterLeftCopyItemsComponent } from '../admin/components/footer-left-copy-items/footer-left-copy-items.component';
import { FundraiserCategoriesComponent } from '../admin/components/fundraiser-categories/fundraiser-categories.component';
import { FundraiserStepTwoCopyItemsComponent } from '../admin/components/fundraiser-step-two-copy-items/fundraiser-step-two-copy-items.component';
import { GameDevelopmentItemsComponent } from '../admin/components/game-development-items/game-development-items.component';
import { HomepageLearnMoreItemsComponent } from '../admin/components/homepage-learn-more-items/homepage-learn-more-items.component';
import { HomepageMainSliderItemsComponent } from '../admin/components/homepage-main-slider-items/homepage-main-slider-items.component';
import { HowItWorksItemsComponent } from '../admin/components/how-it-works-items/how-it-works-items.component';
import { HowToSucceedItemsComponent } from '../admin/components/how-to-succeed-items/how-to-succeed-items.component';
import { NonProfitItemsComponent } from '../admin/components/non-profit-items/non-profit-items.component';
import { PricingItemsComponent } from '../admin/components/pricing-items/pricing-items.component';
import { PrivacyPolicyItemsComponent } from '../admin/components/privacy-policy-items/privacy-policy-items.component';
import { SentEmailComponent } from '../admin/components/sent-email/sent-email.component';
import { SitesComponent } from '../admin/components/sites/sites.component';
import { StartCampaignLearnMoreItemsComponent } from '../admin/components/start-campaign-learn-more-items/start-campaign-learn-more-items.component';
import { StartCampaignMainTextItemsComponent } from '../admin/components/start-campaign-main-text-items/start-campaign-main-text-items.component';
import { StartCampaignSmallTextItemsComponent } from '../admin/components/start-campaign-small-text-items/start-campaign-small-text-items.component';
import { TermsOfUseItemsComponent } from '../admin/components/terms-of-use-items/terms-of-use-items.component';
import { ThankYouMessagesComponent } from '../admin/components/thank-you-messages/thank-you-messages.component';


const adminRoutes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'adminList', component: AdminListComponent },
  { path: 'aboutMissionItems', component: AboutMissionItemsComponent },
  { path: 'aboutTeamItems', component: AboutTeamItemsComponent },
  { path: 'accountDetail', component: AccountDetailComponent },
  { path: 'campaignCompletedItems', component: CampaignCompletedItemsComponent },
  { path: 'campaignGoalRanges', component: CampaignGoalRangesComponent },
  { path: 'campaigns', component: CampaignsComponent },
  { path: 'contactRequests', component: ContactRequestsComponent },
  { path: 'deductibilityStatuses', component: DeductibilityStatusesComponent },
  { path: 'donationNotifications', component: DonationNotificationsComponent },
  { path: 'emailOptInRequests', component: EmailOptInRequestsComponent },
  { path: 'faqItems', component: FaqItemsComponent },
  { path: 'footerCopyItems', component: FooterCopyItemsComponent },
  { path: 'footerLeftCopyItems', component: FooterLeftCopyItemsComponent },
  { path: 'fundraiserCategories', component: FundraiserCategoriesComponent },
  { path: 'fundraiserStepTwoCopyItems', component: FundraiserStepTwoCopyItemsComponent },
  { path: 'gameDevelopmentItems', component: GameDevelopmentItemsComponent },
  { path: 'homepageLearnMoreItems', component: HomepageLearnMoreItemsComponent },
  { path: 'homepageMainSliderItems', component: HomepageMainSliderItemsComponent },
  { path: 'howItWorksItems', component: HowItWorksItemsComponent },
  { path: 'howToSucceedItems', component: HowToSucceedItemsComponent },
  { path: 'nonProfitItems', component: NonProfitItemsComponent },
  { path: 'pricingItems', component: PricingItemsComponent },
  { path: 'privacyPolicyItems', component: PrivacyPolicyItemsComponent },
  { path: 'sentEmail', component: SentEmailComponent },
  { path: 'sites', component: SitesComponent },
  { path: 'startCampaignLearnMoreItems', component: StartCampaignLearnMoreItemsComponent },
  { path: 'startCampaignMainTextItems', component: StartCampaignMainTextItemsComponent },
  { path: 'startCampaignSmallTextItems', component: StartCampaignSmallTextItemsComponent },
  { path: 'termsOfUserItems', component: TermsOfUseItemsComponent },
  { path: 'thankYouMessages', component: ThankYouMessagesComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }