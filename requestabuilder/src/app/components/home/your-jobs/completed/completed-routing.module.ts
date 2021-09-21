import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletedPage } from './completed.page';

const routes: Routes = [
  {
    path: '',
    component: CompletedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletedPageRoutingModule {}
