import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { MeuStorageService } from 'src/app/util/meu-storage.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.page.html',
  styleUrls: ['./new-user.page.scss'],
})
export class NewUserPage implements OnInit {
  passwordToggleIcon = 'eye' ;
  showPassword       = false;
  
  Usuario        : any;
  listaDeUsuarios: Array<any>;
  titulo         : string;

  constructor(private mensagens : AlertController,
              private navegar   : NavController,
              private meustorage: MeuStorageService) {
                
                this.titulo = "inclusao";
                
                if (this.Usuario != null){
                  this.titulo = "alteracao";
                }

                if (this.Usuario == null){
                  this.Usuario = {};
                }
               }

  ionViewDidEnter(){
    this.meustorage.GetUsuarios("usuarios").then(usuarios => {
      this.listaDeUsuarios = usuarios;
    });
  }

  togglePassword():void {
    this.showPassword = !this.showPassword;

    if (this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }

  btn_cadastrar(){
    debugger
    if(this.Usuario.login == null || this.Usuario.login == ""){
      this.presentAlert("Usuário Vazio");
      return;
    }

    if(this.Usuario.senha == null || this.Usuario.senha == ""){
      this.presentAlert("Senha Vazia");
      return;
    }

    // campo que indica ao service qual operação vai ser realizada
    this.Usuario.acao = this.titulo;

    // gera id automaticamente
    if(this.listaDeUsuarios == null){
      this.Usuario.id = 1;
    }else {
      this.Usuario.id = this.listaDeUsuarios.length + 1;
    }
    this.meustorage.SalvarUsuario("usuarios", this.Usuario).then(() => {
      this.navegar.pop();
    });

    this.presentAlert("Usuário Cadastrado!");
  }

  async presentAlert(msg: any) {
    const alert = await this.mensagens.create({
      header: 'Alert',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }


}
