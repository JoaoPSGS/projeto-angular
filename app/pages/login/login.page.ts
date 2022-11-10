import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { MeuStorageService } from 'src/app/util/meu-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  passwordToggleIcon = 'eye' ;
  showPassword       = false;
  
  listaDeUsuarios: Array<any>;
  login          : string;
  senha          : string;

  constructor(private mensagens : AlertController,
              private navegar   : NavController,
              private meustorage: MeuStorageService ) {
                
               }

  ngOnInit() {
  }

  ionViewDidEnter(){
   this.meustorage.GetUsuarios().then(usuarios => {
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

  btn_novo(){
    this.navegar.navigateForward("/new-user");
  }

  btn_entrar(){
    for(let i = 0; i < this.listaDeUsuarios.length; i++){
      if(this.login == this.listaDeUsuarios[i].login && this.senha == this.listaDeUsuarios[i].senha){
        this.navegar.navigateForward("/home");
        this.presentAlert("Bem Vindo(a) "+this.login);
        return;
      }
    }
    this.presentAlert("Login e/ou Senha Inválidos");
  }

  async presentAlert(msg: any) {
    const alert = await this.mensagens.create({
      header: 'Alert',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
