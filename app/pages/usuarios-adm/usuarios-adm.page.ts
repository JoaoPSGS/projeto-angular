import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { MeuStorageService } from 'src/app/util/meu-storage.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-usuarios-adm',
  templateUrl: './usuarios-adm.page.html',
  styleUrls: ['./usuarios-adm.page.scss'],
})
export class UsuariosAdmPage implements OnInit {
  listaDeUsuarios: Array<any>;
  Usuarios       : any;
  titulo         : string;
  isModalOpen    = false;

  constructor(private mensagens : AlertController,
              private navegar   : NavController,
              private meustorage: MeuStorageService,
              private modal     : ModalController) { }

  ngOnInit() {
  }

  reload(){
    this.meustorage.GetUsuarios("usuarios").then(usuarios => {
      this.listaDeUsuarios = usuarios;
      this.Usuarios = usuarios;
    });
  }

  ionViewDidEnter(){
    this.reload();
  }

  alterar_usuario(isOpen: boolean, i: any){
    this.isModalOpen = isOpen;
    this.Usuarios = this.listaDeUsuarios[i];
  }

  excluir_usuario(usuario: any){
    this.Usuarios = usuario;
    this.presentAlertRemoveArea("Remover Usuário?");
  }

  async presentAlertRemoveArea(msg: string) {
    const alert = await this.mensagens.create({
    header: 'Alert!',
    message: msg,
    buttons: [
      {
        text: 'SIM',
        role: 'confirm',
        handler: () => { 
  
          this.titulo = "exclusao";
          this.Usuarios.acao = this.titulo;
          this.meustorage.SalvarUsuario("usuarios", this.Usuarios).then(() => {
            this.presentAlert("Usuário Removido!");
            this.reload();
          });
  
        },
      },
      {
        text: 'NÃO',
        role: 'cancel',
        handler: () => {
        },
      },
    ],
  });
  
  await alert.present();
  
  }

  async presentAlert(msg: any) {
    const alert = await this.mensagens.create({
      header: 'Alert',
      message: msg,
      buttons: ['OK'],
    });
  
    await alert.present();
  }

  cancel(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  confirm() {
    this.Usuarios.acao = "alteracao"
    this.meustorage.SalvarUsuario("usuarios", this.Usuarios).then(() => {
      this.presentAlert("Usuário Atualizado!");
      this.reload();
    });

    this.modal.dismiss('confirm');

  }

}
