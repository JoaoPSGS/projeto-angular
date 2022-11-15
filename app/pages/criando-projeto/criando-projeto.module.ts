import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriandoProjetoPageRoutingModule } from './criando-projeto-routing.module';

import { CriandoProjetoPage } from './criando-projeto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriandoProjetoPageRoutingModule
  ],
  declarations: [CriandoProjetoPage]
})
export class CriandoProjetoPageModule {}
