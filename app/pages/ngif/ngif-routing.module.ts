import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgifPage } from './ngif.page';

const routes: Routes = [
  {
    path: '',
    component: NgifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgifPageRoutingModule {}
