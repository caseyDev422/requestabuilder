import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
 import { PopoverMenuComponent } from './popover-menu/popover-menu.component';
import { SavedPageRoutingModule } from './saved-routing.module';

import { SavedPage } from './saved.page';

@NgModule({
  imports: [
 
  CommonModule,
    FormsModule,
    IonicModule,
    SavedPageRoutingModule
  ],
  declarations: [
    SavedPage,
    PopoverMenuComponent
  ]
})
export class SavedPageModule {}
