import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { MyActivityModule } from './my-activity/my-activity.module';
import { ThreadModule } from './thread/thread.module';
import { LoginModule } from './login/login.module';



//components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { MyActivityComponent } from './my-activity/my-activity.component';
import { UserRegisterComponent } from './my-activity/user-register/user-register.component';
import { UserEditComponent } from './my-activity/user-edit/user-edit.component';

import { ThreadComponent } from './thread/thread.component';
import { ThreadAddComponent } from './thread/thread-add/thread-add.component';
import { ThreadGetComponent } from './thread/thread-get/thread-get.component';
import { ThreadEditComponent } from './thread/thread-edit/thread-edit.component';
import { ThreadDetailComponent } from './thread/thread-detail/thread-detail.component';

import { LoginComponent } from './login/login.component';


//services
import { UserService } from './my-activity/user.service';
import { ThreadService } from './thread/thread.service';
import { LoginService } from './login/login.service';

//custom directive
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RecentActivityComponent,
    GuidelinesComponent,
    MyActivityComponent,
    UserRegisterComponent,
    UserEditComponent,
    ThreadComponent,
    ThreadAddComponent,
    ThreadGetComponent,
    ThreadEditComponent,
    ThreadDetailComponent,
    LoginComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
