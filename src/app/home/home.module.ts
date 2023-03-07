import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ModalController } from '@ionic/angular'; 

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

export class MyModal {
  state: boolean;
  functionality: string;
  databaseData: string;

  constructor(private modalController: ModalController) {}

  async close() {
    await this.modalController.dismiss();
  }
}