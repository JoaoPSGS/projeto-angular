import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgforPageRoutingModule } from './ngfor-routing.module';

import { NgforPage } from './ngfor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgforPageRoutingModule
  ],
  declarations: [NgforPage]
})
export class NgforPageModule {}
