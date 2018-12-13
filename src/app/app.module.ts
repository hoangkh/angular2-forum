import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { MyActivityModule } from './my-activity/my-activity.module';

//components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { FaqComponent } from './faq/faq.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { MyActivityComponent } from './my-activity/my-activity.component';
import { UserRegisterComponent } from './my-activity/user-register/user-register.component';
import { UserEditComponent } from './my-activity/user-edit/user-edit.component';

//services
import { UserService } from './my-activity/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RecentActivityComponent,
    FaqComponent,
    GuidelinesComponent,
    MyActivityComponent,
    UserRegisterComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
