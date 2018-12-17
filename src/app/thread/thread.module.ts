import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from '../app-routing.module';

//components
import { ThreadComponent } from './thread.component';
import { ThreadAddComponent } from './thread-add/thread-add.component';
import { ThreadGetComponent } from './thread-get/thread-get.component';
import { ThreadEditComponent } from './thread-edit/thread-edit.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';

//services
import { ThreadService } from './thread.service';

@NgModule({
  declarations: [
    ThreadComponent,
    ThreadAddComponent,
    ThreadGetComponent,
    ThreadEditComponent,
    ThreadDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ ThreadService ],
  bootstrap: [ThreadComponent]
})
export class ThreadModule { }
