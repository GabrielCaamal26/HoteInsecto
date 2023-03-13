import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HumoPageRoutingModule } from './humo-routing.module';

import { HumoPage } from './humo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HumoPageRoutingModule
  ],
  declarations: [HumoPage]
})
export class HumoPageModule {}
