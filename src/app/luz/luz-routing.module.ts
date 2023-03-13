import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LuzPage } from './luz.page';

const routes: Routes = [
  {
    path: '',
    component: LuzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LuzPageRoutingModule {}
