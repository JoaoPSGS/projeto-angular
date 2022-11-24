import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VariavelPage } from './variavel.page';

const routes: Routes = [
  {
    path: '',
    component: VariavelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VariavelPageRoutingModule {}
