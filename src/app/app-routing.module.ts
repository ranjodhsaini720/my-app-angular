import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManagmentComponent } from './managment/managment.component';
import { ProfileComponent } from './profile/profile.component';
import { CalenderComponent } from './calender/calender.component';
import { ChartComponent } from './chart/chart.component';
import { ChatComponent } from './chat/chat.component';
import { ErrorComponent } from './error/error.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
{
  path:'',
  component:HomeComponent,
},
{
  path:"managment",
  component:ManagmentComponent
},
{
  path:"profile",
  component:ProfileComponent
}
,
{
  path:"calender",
  component:CalenderComponent
}
,
{
  path:"chart",
  component:ChartComponent
}
,
{
  path:"chat",
  component:ChatComponent
},
{
  path:"error",
  component:ErrorComponent
},
{
  path:"project",
  component: ProjectComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
