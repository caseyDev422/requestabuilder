import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatedPage } from './created.page';

const routes: Routes = [
  {
    path: '',
    component: CreatedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatedPageRoutingModule {}
