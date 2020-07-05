import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { BusinessprofileComponent } from './businessprofile/businessprofile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarnavComponent } from './topbarnav/topbarnav.component';
import {UsersComponent} from './users/users.component'

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    outlet: "sidebar"

  },
  {
    path: '',
    component: TopbarnavComponent,
    outlet: "topbar"

  },
   {
     path: '',
     component: LoginComponent,
     pathMatch: 'full'

   },
  {
    path: 'userprofile',
    component: UserprofileComponent
  },
  {
    path: 'timeline',
    component: TimelineComponent,
    //pathMatch: 'full'
  },
  {
    path: 'timeline',
    component: TimelineComponent
  },
  {
    path: 'businessprofile',
    component: BusinessprofileComponent    
  },
  {
    path: 'users',
    component: UsersComponent 
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
