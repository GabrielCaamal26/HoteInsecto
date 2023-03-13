import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuzPageRoutingModule } from './luz-routing.module';

import { LuzPage } from './luz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuzPageRoutingModule
  ],
  declarations: [LuzPage]
})
export class LuzPageModule {}
