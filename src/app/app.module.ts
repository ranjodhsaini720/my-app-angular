import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ManagmentComponent } from './managment/managment.component';
import { ProfileComponent } from './profile/profile.component';
import { CalenderComponent } from './calender/calender.component';
import { ChatComponent } from './chat/chat.component';
import { ChartComponent } from './chart/chart.component';
import { ErrorComponent } from './error/error.component';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ManagmentComponent,
    ProfileComponent,
    CalenderComponent,
    ChatComponent,
    ChartComponent,
    ErrorComponent,
    ProjectComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
