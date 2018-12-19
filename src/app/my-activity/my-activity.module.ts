import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from '../app-routing.module';

//components
import { MyActivityComponent } from './my-activity.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserEditComponent } from './user-edit/user-edit.component';

//services
import { UserService } from './user.service';

//custom directives
import { DropdownDirective } from '../shared/dropdown.directive';


@NgModule({
  declarations: [
    MyActivityComponent,
    UserRegisterComponent,
    UserEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ UserService ],
  bootstrap: [ MyActivityComponent] 
})
export class MyActivityModule { }
