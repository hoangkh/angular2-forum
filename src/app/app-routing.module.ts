import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { FaqComponent } from './faq/faq.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { MyActivityComponent } from './my-activity/my-activity.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recent-activity', component: RecentActivityComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'guidelines', component: GuidelinesComponent },
  { path: 'my-activity', component: MyActivityComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }