import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TimelineComponent } from './timeline/timeline.component';
import {BusinessprofileComponent} from './businessprofile/businessprofile.component'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
    
  },
  {
    path:'userprofile',
    component:UserprofileComponent,
   //pathMatch: 'full'
 },
 {
  path:'timeline',
  component:TimelineComponent,
 //pathMatch: 'full'
},
{
  path:'businessprofile',
  component:BusinessprofileComponent,
 //pathMatch: 'full'
}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
