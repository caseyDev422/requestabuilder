import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreateJobComponent } from './components/home/create-job/create-job.component';
import { FindJobComponent } from './components/home/find-job/find-job.component';
import { HomeComponent } from './components/home/home.component';
import { SeeJobsComponent } from './components/home/see-jobs/see-jobs.component';
import { YourJobsComponent } from './components/home/your-jobs/your-jobs.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {  path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'find-job', component: FindJobComponent},
  { path: 'create-job', component: CreateJobComponent},
  { path: 'your-jobs', component: YourJobsComponent},
  { path: 'all-jobs', component: SeeJobsComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
