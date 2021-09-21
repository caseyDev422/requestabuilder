import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatedPageRoutingModule } from './created-routing.module';

import { CreatedPage } from './created.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatedPageRoutingModule
  ],
  declarations: [CreatedPage]
})
export class CreatedPageModule {}
