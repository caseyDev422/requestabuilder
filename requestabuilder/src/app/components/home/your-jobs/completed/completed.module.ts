import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletedPageRoutingModule } from './completed-routing.module';

import { CompletedPage } from './completed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletedPageRoutingModule
  ],
  declarations: [CompletedPage]
})
export class CompletedPageModule {}
