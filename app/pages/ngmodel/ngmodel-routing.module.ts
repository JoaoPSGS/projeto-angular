import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgmodelPage } from './ngmodel.page';

const routes: Routes = [
  {
    path: '',
    component: NgmodelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgmodelPageRoutingModule {}
