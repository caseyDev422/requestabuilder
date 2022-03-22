import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChooseJobComponent } from './components/home/choose-job/choose-job.component';
import { CreateJobComponent } from './components/home/create-job/create-job.component';
import { FindJobComponent } from './components/home/find-job/find-job.component';
import { SeeJobsComponent } from './components/home/see-jobs/see-jobs.component';
import { YourJobsComponent } from './components/home/your-jobs/your-jobs.component';
import { SettingsComponent } from './components/home/settings/settings.component';
import { ToggleThemeComponent } from './components/toggle-theme/toggle-theme.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    ChooseJobComponent,
    CreateJobComponent,
    FindJobComponent,
    SeeJobsComponent,
    YourJobsComponent,
    SettingsComponent,
    ToggleThemeComponent
  ],
  entryComponents: [],
  imports: [
  BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
