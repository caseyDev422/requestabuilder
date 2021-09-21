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
import { SettingsComponent} from './components/home/settings/settings.component';
import { ChooseJobComponent } from './components/home/choose-job/choose-job.component';

// **TODO** Implement RouteGuard (AuthGuard)
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'find-job', component: FindJobComponent},
  { path: 'create-job', component: CreateJobComponent},
  { path: 'select-job', component: ChooseJobComponent},
  { path: 'my-jobs', component: YourJobsComponent, children: [
    {
    path: 'completed',
    loadChildren: () => import('./components/home/your-jobs/completed/completed.module').then( m => m.CompletedPageModule)
    },
    {
      path: 'saved',
      loadChildren: () => import('./components/home/your-jobs/saved/saved.module').then( m => m.SavedPageModule)
    },
    {
      path: 'created',
      loadChildren: () => import('./components/home/your-jobs/created/created.module').then( m => m.CreatedPageModule)
    }
  ]},
  { path: 'all-jobs', component: SeeJobsComponent },
  { path: 'settings', component: SettingsComponent },
  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
