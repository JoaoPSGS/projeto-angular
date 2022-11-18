import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { MeuStorageService } from 'src/app/util/meu-storage.service';

@Component({
  selector: 'app-usuarios-adm',
  templateUrl: './usuarios-adm.page.html',
  styleUrls: ['./usuarios-adm.page.scss'],
})
export class UsuariosAdmPage implements OnInit {
  listaDeUsuarios: Array<any>;

  constructor(private mensagens : AlertController,
              private navegar   : NavController,
              private meustorage: MeuStorageService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.meustorage.GetUsuarios("usuarios").then(usuarios => {
      this.listaDeUsuarios = usuarios;
    });
  }

}
