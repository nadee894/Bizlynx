import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { BusinessprofileComponent } from './businessprofile/businessprofile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarnavComponent } from './topbarnav/topbarnav.component';
import { UsersComponent } from './users/users.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserprofileComponent,
    TimelineComponent,
    BusinessprofileComponent,
    SidebarComponent,
    TopbarnavComponent,
    UsersComponent,
    MessagesComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
