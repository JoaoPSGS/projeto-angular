import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VariavelPageRoutingModule } from './variavel-routing.module';

import { VariavelPage } from './variavel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VariavelPageRoutingModule
  ],
  declarations: [VariavelPage]
})
export class VariavelPageModule {}
