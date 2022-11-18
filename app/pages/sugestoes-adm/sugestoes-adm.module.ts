import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SugestoesAdmPageRoutingModule } from './sugestoes-adm-routing.module';

import { SugestoesAdmPage } from './sugestoes-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SugestoesAdmPageRoutingModule
  ],
  declarations: [SugestoesAdmPage]
})
export class SugestoesAdmPageModule {}
