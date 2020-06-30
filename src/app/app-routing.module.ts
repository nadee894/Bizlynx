import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TimelineComponent } from './timeline/timeline.component';
import {BusinessprofileComponent} from './businessprofile/businessprofile.component';
import {SidebarComponent} from './sidebar/sidebar.component'

const routes: Routes = [
  {
     path: '',
     component: SidebarComponent,
     //pathMatch: 'full',
     outlet: "sidebar"
    
   },
  // {
  //   path: '',
  //   component: LoginComponent,
  //   pathMatch: 'full'
    
  // },
  {
    path:'',
    component:UserprofileComponent,
    pathMatch: 'full'
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
