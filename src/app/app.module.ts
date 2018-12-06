import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { FaqComponent } from './faq/faq.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { MyActivityComponent } from './my-activity/my-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RecentActivityComponent,
    FaqComponent,
    GuidelinesComponent,
    MyActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
