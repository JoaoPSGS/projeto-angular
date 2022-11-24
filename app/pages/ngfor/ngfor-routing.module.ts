import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgforPage } from './ngfor.page';

const routes: Routes = [
  {
    path: '',
    component: NgforPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgforPageRoutingModule {}
