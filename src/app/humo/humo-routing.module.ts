import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HumoPage } from './humo.page';

const routes: Routes = [
  {
    path: '',
    component: HumoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HumoPageRoutingModule {}
