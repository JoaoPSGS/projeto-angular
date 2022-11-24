import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgmodelPageRoutingModule } from './ngmodel-routing.module';

import { NgmodelPage } from './ngmodel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgmodelPageRoutingModule
  ],
  declarations: [NgmodelPage]
})
export class NgmodelPageModule {}
