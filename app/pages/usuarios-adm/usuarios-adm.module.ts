import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosAdmPageRoutingModule } from './usuarios-adm-routing.module';

import { UsuariosAdmPage } from './usuarios-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosAdmPageRoutingModule
  ],
  declarations: [UsuariosAdmPage]
})
export class UsuariosAdmPageModule {}
