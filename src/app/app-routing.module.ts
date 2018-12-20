import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';

import { MyActivityComponent } from './my-activity/my-activity.component';
import { UserRegisterComponent } from './my-activity/user-register/user-register.component';
import { UserEditComponent } from './my-activity/user-edit/user-edit.component';

import { LoginComponent } from './login/login.component';

import { ThreadComponent } from './thread/thread.component';
import { ThreadAddComponent } from './thread/thread-add/thread-add.component';
import { ThreadGetComponent } from './thread/thread-get/thread-get.component';
import { ThreadEditComponent } from './thread/thread-edit/thread-edit.component';
import { ThreadDetailComponent } from './thread/thread-detail/thread-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recent-activity', component: RecentActivityComponent },
  { path: 'guidelines', component: GuidelinesComponent },
  { path: 'my-activity', component: MyActivityComponent },
  { path: 'user/register', component: UserRegisterComponent },
  { path: 'user/signin', component: LoginComponent },  
  { path: 'user/edit', component: UserEditComponent },
  { path: 'thread/create', component: ThreadAddComponent },
  { path: 'thread/edit', component: ThreadEditComponent },
  { path: 'thread/view', component: ThreadDetailComponent },
  { path: 'thread', component: ThreadComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
