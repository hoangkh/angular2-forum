import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { FaqComponent } from './faq/faq.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { MyActivityComponent } from './my-activity/my-activity.component';
import { UserRegisterComponent } from './my-activity/user-register/user-register.component';
import { UserEditComponent } from './my-activity/user-edit/user-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recent-activity', component: RecentActivityComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'guidelines', component: GuidelinesComponent },
  { path: 'my-activity', component: MyActivityComponent },
  { path: 'user/register', component: UserRegisterComponent },
  { path: 'user/edit', component: UserEditComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
