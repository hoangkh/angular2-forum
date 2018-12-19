import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';

import { LoginService } from './login.service';

import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [ LoginService ],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
